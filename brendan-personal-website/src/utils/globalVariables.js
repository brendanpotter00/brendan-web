export const SHOW_PICTURES = false;

export const isMobile = (() => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches;
})();

export const CanvasZIndex = isMobile ? 0 : -1;
