import { useEffect, useState } from "react";
import { isScrolledToBottom, IsScrolledToBottomOptions } from "../utils";

export interface UseIsScrolledToBottomProps {
  parentId: string;
  options?: Partial<IsScrolledToBottomOptions>;
}

export const useIsScrolledToBottom = (props: UseIsScrolledToBottomProps) => {
  const { parentId, options } = props;

  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const parent = document.getElementById(parentId);
    if (!parent) {
      console.warn(`Parent element with ID "${parentId}" not found.`);
      return;
    }

    const checkScroll = () => {
      setIsBottom(isScrolledToBottom(parentId, options)!);
    };

    parent.addEventListener("scroll", checkScroll);
    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(parent);

    return () => {
      parent.removeEventListener("scroll", checkScroll);
      resizeObserver.disconnect();
    };
  }, [parentId, options]);

  return { isBottom };
};

export type UseIsScrolledToBottomReturn = ReturnType<
  typeof useIsScrolledToBottom
>;
