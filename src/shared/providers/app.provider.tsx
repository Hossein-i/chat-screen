"use client";

import { StoreProvider } from "./store.provider";
import { UIProvider } from "./ui.provider";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AppProviderProps extends React.PropsWithChildren {}

export const AppProvider: React.FC<AppProviderProps> = (props) => {
  const { children } = props;

  return (
    <StoreProvider>
      <UIProvider>{children}</UIProvider>
    </StoreProvider>
  );
};
