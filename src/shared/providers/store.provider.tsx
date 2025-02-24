"use client";

import { Provider } from "react-redux";
import { store } from "../redux";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface StoreProviderProps extends React.PropsWithChildren {}

export const StoreProvider: React.FC<StoreProviderProps> = (props) => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};
