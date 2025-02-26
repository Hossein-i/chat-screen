"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Alert,
  Button,
  ButtonProps,
  cn,
  Ripple,
  useButton,
} from "@heroui/react";
import { forwardRef } from "react";

export interface ReplyMessageUIProps extends ButtonProps {
  name: string;
  text: string;
  onClose?: () => void;
}

export const ReplyMessageUI: React.FC<ReplyMessageUIProps> = forwardRef(
  (props, ref) => {
    const { name, text, onClose, ...restProps } = props;
    const {
      domRef,
      //   children,
      //   spinnerSize,
      //   spinner = <Spinner color="current" size={spinnerSize} />,
      //   spinnerPlacement,
      //   startContent,
      // endContent,
      //   isLoading,
      disableRipple,
      getButtonProps,
      getRippleProps,
    } = useButton({
      ref,
      ...restProps,
      radius: "sm",
      variant: "light",
      className: "px-0 h-auto text-start",
      fullWidth: true,
    });
    const { ripples, onClear } = getRippleProps();

    return (
      <button ref={domRef} {...getButtonProps()}>
        {/* {startContent} */}
        {/* {isLoading && spinnerPlacement === "start" && spinner} */}
        {/* {children} */}
        <Alert
          className={cn("border-s-4 p-1 pe-4", `border-${props.color}`)}
          radius={props.radius}
          color={props.color}
          title={name}
          description={text}
          endContent={
            onClose ? (
              <Button
                className="absolute end-2 top-1/2 -translate-y-1/2"
                size="sm"
                radius="full"
                onPress={onClose}
                isIconOnly
              >
                <XMarkIcon className="h-4 w-4" />
              </Button>
            ) : undefined
          }
          hideIcon
        />
        {/* {isLoading && spinnerPlacement === "end" && spinner} */}
        {/* {endContent} */}
        {!disableRipple && <Ripple ripples={ripples} onClear={onClear} />}
      </button>
    );
  },
);

ReplyMessageUI.displayName = "ReplyMessageUI";
