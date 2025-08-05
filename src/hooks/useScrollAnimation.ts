import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.05, // Reduced threshold for earlier trigger
    rootMargin = '0px 0px -20px 0px', // Reduced margin for smoother trigger
    triggerOnce = true
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize the callback to prevent unnecessary re-renders
  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    } else if (!triggerOnce) {
      setIsVisible(false);
    }
  }, [triggerOnce]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use passive observation for better performance
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return { elementRef, isVisible };
};

// Hook for animating children with staggered delays
export const useStaggeredAnimation = (itemCount: number, options: UseScrollAnimationOptions = {}) => {
  const { elementRef, isVisible } = useScrollAnimation(options);
  
  return {
    containerRef: elementRef,
    isVisible,
    getItemDelay: (index: number) => isVisible ? `${index * 0.05}s` : '0s', // Reduced delay
    getItemClass: (index: number, baseClass: string = '') =>
      `${baseClass} ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}` // Reduced translate distance
  };
};