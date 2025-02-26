export type FadeEffectOptions = {
  className: string;
  delay: number;
};

export type ApplyFadeEffectOptions = {
  fadeIn: Partial<FadeEffectOptions>;
  fadeOut: Partial<FadeEffectOptions>;
};

const defaultOptions = {
  fadeIn: {
    className: "fade-in",
    delay: 400,
  },
  fadeOut: {
    className: "fade-out",
    delay: 1000,
  },
} as const satisfies Partial<ApplyFadeEffectOptions>;

export const validateFadeEffectOptions = (
  options: Partial<FadeEffectOptions>,
): FadeEffectOptions => {
  const { className = "", delay = 0 } = options;

  if (typeof className !== "string" || className.trim() === "") {
    throw new Error("ClassName must be a non-empty string.");
  }

  if (typeof delay !== "number" || delay < 0) {
    throw new Error("Delay must be a non-negative number.");
  }

  return { className, delay };
};

const addClassWithDelay = (
  element: HTMLElement,
  className: string,
  delay: number,
): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.classList.add(className);
      resolve();
    }, delay);
  });
};

const removeClassWithDelay = (
  element: HTMLElement,
  className: string,
  delay: number,
): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      element.classList.remove(className);
      resolve();
    }, delay);
  });
};

export const applyFadeEffect = async (
  elementId: string,
  options?: Partial<ApplyFadeEffectOptions>,
) => {
  const { fadeIn, fadeOut } = {
    fadeIn: { ...defaultOptions.fadeIn, ...options?.fadeIn },
    fadeOut: { ...defaultOptions.fadeOut, ...options?.fadeOut },
  };

  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found.`);
    return;
  }

  const validatedFadeIn = validateFadeEffectOptions(fadeIn);
  const validatedFadeOut = validateFadeEffectOptions(fadeOut);

  await addClassWithDelay(element, validatedFadeOut.className, 0);
  await removeClassWithDelay(
    element,
    validatedFadeOut.className,
    validatedFadeOut.delay,
  );

  await addClassWithDelay(element, validatedFadeIn.className, 0);
  await removeClassWithDelay(
    element,
    validatedFadeIn.className,
    validatedFadeIn.delay,
  );
};
