export type NavigateToIdOptions = Pick<ScrollOptions, "behavior"> & {
  offset: number;
};

const defaultOptions = {
  behavior: "smooth",
  offset: 0,
} as const satisfies Partial<NavigateToIdOptions>;

export const navigateToId = (
  elementId: string,
  options?: Partial<NavigateToIdOptions>,
  parentId?: string,
) => {
  const { behavior, offset } = { ...defaultOptions, ...options };

  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found.`);
    return;
  }

  const parent = parentId ? document.getElementById(parentId) : undefined;
  if (parentId && !parent) {
    console.warn(`Parent element with ID "${parentId}" not found.`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition =
    elementPosition + (parent ? parent.scrollTop : window.scrollY) - offset;

  const scrollContainer = parent || window;
  scrollContainer.scrollTo({
    top: offsetPosition,
    behavior,
  });
};
