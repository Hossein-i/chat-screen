"use client";

import { useIsScrolledToBottom } from "@/shared/hooks";
import { scrollToBottomOfParent } from "@/shared/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ButtonProps, cn, Ripple, useButton } from "@heroui/react";
import { forwardRef } from "react";

export interface ScrollToBottomButtonUIProps extends ButtonProps {
  parentId: string;
}

export const ScrollToBottomButtonUI: React.FC<ScrollToBottomButtonUIProps> =
  forwardRef((props, ref) => {
    const { parentId, ...restProps } = props;
    const { isBottom } = useIsScrolledToBottom({ parentId });

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
      radius: "full",
      ...restProps,
      className: cn("absolute bottom-4 end-4", restProps.className),
      onPress: () => scrollToBottomOfParent(parentId),
      isIconOnly: true,
    });
    const { ripples, onClear } = getRippleProps();

    return (
      !isBottom && (
        <button ref={domRef} {...getButtonProps()}>
          {/* {startContent} */}
          {/* {isLoading && spinnerPlacement === "start" && spinner} */}
          {/* {children} */}
          {/* {isLoading && spinnerPlacement === "end" && spinner} */}
          {/* {endContent} */}
          <ChevronDownIcon className="h-4 w-4" />
          {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />}
        </button>
      )
    );
  });

ScrollToBottomButtonUI.displayName = "ScrollToBottomButtonUI";
