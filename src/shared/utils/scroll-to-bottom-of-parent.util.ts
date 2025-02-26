export type ScrollToBottomOptions = Pick<ScrollOptions, "behavior"> & {
  offset: number;
  percentage: number;
};

const defaultScrollToBottomOptions = {
  behavior: "smooth",
  percentage: 0,
} as const satisfies Partial<ScrollToBottomOptions>;

export const scrollToBottomOfParent = (
  parentId: string,
  options?: Partial<ScrollToBottomOptions>,
): void => {
  const { behavior, offset, percentage } = {
    ...defaultScrollToBottomOptions,
    ...options,
  };

  const parent = document.getElementById(parentId);
  if (!parent) {
    console.warn(`Parent element with ID "${parentId}" not found.`);
    return;
  }

  let scrollPosition = parent.scrollHeight - parent.clientHeight;
  if (percentage !== undefined) {
    if (percentage < 0 || percentage > 100) {
      throw new Error("Percentage must be between 0 and 100.");
    }
    scrollPosition -= (parent.scrollHeight * percentage) / 100;
  } else {
    scrollPosition -= offset || 0;
  }

  parent.scrollTo({
    top: scrollPosition,
    behavior,
  });
};
