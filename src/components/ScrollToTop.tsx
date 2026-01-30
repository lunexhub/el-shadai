import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToElement, scrollToTop } from "@/lib/utils";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // If there's a hash, scroll to that element
      if (hash) {
        const elementId = hash.substring(1); // Remove the # symbol
        scrollToElement(elementId, 80, 'smooth');
      } else {
        // No hash, scroll to top
        scrollToTop('smooth');
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

