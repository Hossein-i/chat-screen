export const getViewportHeightPercentage = (percentage: number): number => {
  if (percentage < 0 || percentage > 100) {
    throw new Error("Percentage must be between 0 and 100.");
  }
  return window.innerHeight * (percentage / 100);
};
