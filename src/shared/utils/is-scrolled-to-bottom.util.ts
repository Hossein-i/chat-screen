export type IsScrolledToBottomOptions = {
  offset: number;
  percentage: number;
};

const defaultIsScrolledToBottomOptions = {
  offset: 10,
} as const satisfies Partial<IsScrolledToBottomOptions>;

export const isScrolledToBottom = (
  parentId: string,
  options?: Partial<IsScrolledToBottomOptions>,
) => {
  const { offset, percentage } = {
    ...defaultIsScrolledToBottomOptions,
    ...options,
  };

  const parent = document.getElementById(parentId);
  if (!parent) {
    console.warn(`Parent element with ID "${parentId}" not found.`);
    return;
  }

  const { scrollTop, scrollHeight, clientHeight } = parent;

  const currentScrollPosition = scrollTop + clientHeight;
  let targetScrollPosition = scrollHeight;

  if (percentage !== undefined) {
    if (percentage < 0 || percentage > 100) {
      throw new Error("Percentage must be between 0 and 100.");
    }
    targetScrollPosition -= (scrollHeight * percentage) / 100;
  } else {
    targetScrollPosition -= offset || 0;
  }

  return currentScrollPosition >= targetScrollPosition;
};
