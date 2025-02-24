"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UIProviderProps extends React.PropsWithChildren {}

export const UIProvider: React.FC<UIProviderProps> = (props) => {
  const { children } = props;

  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <ThemeProvider attribute="class" defaultTheme="system">
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  );
};
