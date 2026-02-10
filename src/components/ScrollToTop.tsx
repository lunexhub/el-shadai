import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { scrollToElement, scrollToTop } from "@/lib/utils";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const isInitialMount = useRef(true);
  const hasScrolled = useRef(false);

  useEffect(() => {
    // Function to handle scrolling
    const handleScroll = () => {
      // If there's a hash, scroll to that element
      if (hash) {
        const elementId = hash.substring(1); // Remove the # symbol
        
        // Wait for element to be in DOM, with retries
        let attempts = 0;
        const maxAttempts = 20; // Increased for direct page access
        
        const tryScroll = () => {
          const element = document.getElementById(elementId);
          if (element) {
            // Ensure element is fully rendered
            requestAnimationFrame(() => {
              scrollToElement(elementId, 80, 'smooth');
              hasScrolled.current = true;
            });
          } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(tryScroll, 100); // Increased delay for direct access
          } else {
            // Element not found after retries, scroll to top
            scrollToTop('smooth');
            hasScrolled.current = true;
          }
        };
        
        tryScroll();
      } else {
        // No hash, scroll to top
        // Use longer delay for direct page access to ensure DOM is ready
        const delay = isInitialMount.current ? 300 : 100;
        setTimeout(() => {
          scrollToTop('smooth');
          hasScrolled.current = true;
        }, delay);
      }
    };

    // Reset scroll flag on pathname change
    hasScrolled.current = false;

    // For direct page access, wait for page to be fully loaded
    if (isInitialMount.current) {
      // Multiple strategies to ensure scroll works on direct page access
      if (document.readyState === 'complete') {
        // Page already loaded
        setTimeout(handleScroll, 100);
      } else if (document.readyState === 'interactive') {
        // DOM is ready but resources may still be loading
        setTimeout(handleScroll, 200);
      } else {
        // Wait for full load
        window.addEventListener('load', () => {
          setTimeout(handleScroll, 100);
        }, { once: true });
      }
      
      // Fallback: try after a longer delay
      const fallbackTimer = setTimeout(() => {
        if (!hasScrolled.current) {
          handleScroll();
        }
      }, 500);
      
      isInitialMount.current = false;
      
      return () => {
        clearTimeout(fallbackTimer);
        window.removeEventListener('load', handleScroll);
      };
    } else {
      // For navigation between pages, shorter delay is fine
      const timer = setTimeout(handleScroll, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  // Handle browser back/forward navigation scroll restoration
  useEffect(() => {
    const handlePopState = () => {
      // Browser handles scroll position for back/forward, but we ensure it works
      setTimeout(() => {
        if (hash) {
          const elementId = hash.substring(1);
          const element = document.getElementById(elementId);
          if (element) {
            scrollToElement(elementId, 80, 'smooth');
          }
        } else {
          // Restore scroll position or scroll to top
          const savedPosition = sessionStorage.getItem(`scroll-${pathname}`);
          if (savedPosition) {
            window.scrollTo(0, parseInt(savedPosition, 10));
          } else {
            scrollToTop('smooth');
          }
        }
      }, 100);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [pathname, hash]);

  // Save scroll position before navigation
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString());
    };

    window.addEventListener('scroll', saveScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', saveScrollPosition);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

