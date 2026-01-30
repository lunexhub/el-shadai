import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smooth scroll to an element with offset for fixed navbar
 * Works across all platforms and browsers
 */
export function scrollToElement(
  elementId: string,
  offset: number = 80,
  behavior: ScrollBehavior = 'smooth'
): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  // Check if smooth scroll is supported
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: offsetPosition,
      behavior: behavior
    });
  } else {
    // Fallback for browsers that don't support smooth scroll
    // Use requestAnimationFrame for smooth animation
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / 500, 1); // 500ms duration
      
      // Easing function (ease-in-out)
      const ease = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    if (behavior === 'smooth') {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, offsetPosition);
    }
  }
}

/**
 * Scroll to top of page
 */
export function scrollToTop(behavior: ScrollBehavior = 'smooth'): void {
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: 0,
      behavior: behavior
    });
  } else {
    // Fallback animation
    if (behavior === 'smooth') {
      const startPosition = window.pageYOffset;
      const distance = -startPosition;
      let startTime: number | null = null;

      function animation(currentTime: number) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / 500, 1);
        
        const ease = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, 0);
    }
  }
}
