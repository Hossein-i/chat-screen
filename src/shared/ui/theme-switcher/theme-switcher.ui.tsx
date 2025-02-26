"use client";

import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { ButtonProps, Ripple, useButton } from "@heroui/react";
import { useTheme } from "next-themes";
import { forwardRef, useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ThemeSwitcherUIProps extends ButtonProps {}

export const ThemeSwitcherUI: React.FC<ThemeSwitcherUIProps> = forwardRef(
  (props, ref) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const IconTheme =
      theme === "system"
        ? ComputerDesktopIcon
        : theme === "light"
          ? SunIcon
          : MoonIcon;

    const onSystemTheme = () => setTheme("system");
    const onLightTheme = () => setTheme("light");
    const onDarkTheme = () => setTheme("dark");
    const onSwitchTheme =
      theme === "system"
        ? onLightTheme
        : theme === "light"
          ? onDarkTheme
          : onSystemTheme;

    const {
      domRef,
      //   children,
      //   spinnerSize,
      //   spinner = <Spinner color="current" size={spinnerSize} />,
      //   spinnerPlacement,
      //   startContent,
      //   endContent,
      //   isLoading,
      disableRipple,
      getButtonProps,
      getRippleProps,
    } = useButton({
      ref,
      ...props,
      isIconOnly: true,
      onPress: onSwitchTheme,
    });
    const { ripples, onClear } = getRippleProps();

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
      <button ref={domRef} {...getButtonProps()}>
        {/* {startContent} */}
        {/* {isLoading && spinnerPlacement === "start" && spinner} */}
        {/* {children} */}
        {/* {isLoading && spinnerPlacement === "end" && spinner} */}
        {/* {endContent} */}
        <IconTheme className="h-4 w-4" />
        {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />}
      </button>
    );
  },
);

ThemeSwitcherUI.displayName = "ThemeSwitcherUI";
