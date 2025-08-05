import { useEffect, useRef, useState, useCallback } from 'react';

interface WebflowAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  staggerDelay?: number;
  animationType?: 'fade' | 'slide' | 'scale' | 'rotate' | 'custom';
  direction?: 'up' | 'down' | 'left' | 'right' | 'center';
}

export const useWebflowAnimation = (options: WebflowAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    animationType = 'fade',
    direction = 'up'
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    const baseClass = 'opacity-100 transition-all duration-700 ease-out';
    
    switch (animationType) {
      case 'slide':
        return `${baseClass} animate-fade-in-${direction}`;
      case 'scale':
        return `${baseClass} animate-scale-in${direction === 'center' ? '-center' : ''}`;
      case 'rotate':
        return `${baseClass} animate-rotate-in`;
      case 'fade':
      default:
        return `${baseClass} animate-fade-in-${direction}`;
    }
  };

  return { 
    elementRef, 
    isVisible, 
    animationClass: getAnimationClass()
  };
};

export const useStaggeredWebflowAnimation = (
  itemCount: number, 
  options: WebflowAnimationOptions = {}
) => {
  const { elementRef, isVisible } = useWebflowAnimation(options);
  const { staggerDelay = 100 } = options;

  const getItemProps = (index: number) => ({
    className: isVisible 
      ? `animate-fade-in-up delay-${Math.min(index * staggerDelay, 1000)}` 
      : 'opacity-0 translate-y-8',
    style: {
      animationDelay: isVisible ? `${index * staggerDelay}ms` : '0ms'
    }
  });

  return {
    containerRef: elementRef,
    isVisible,
    getItemProps
  };
};

export const useMagneticHover = () => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const maxDistance = 20;
      const distance = Math.sqrt(x * x + y * y);
      const factor = Math.min(distance / 100, 1);
      
      const moveX = (x / distance) * maxDistance * factor;
      const moveY = (y / distance) * maxDistance * factor;

      element.style.setProperty('--mouse-x', `${moveX}px`);
      element.style.setProperty('--mouse-y', `${moveY}px`);
    };

    const handleMouseLeave = () => {
      element.style.setProperty('--mouse-x', '0px');
      element.style.setProperty('--mouse-y', '0px');
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { elementRef };
};

export const useCardTilt = (maxTilt: number = 15) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      
      const tiltX = deltaY * maxTilt;
      const tiltY = -deltaX * maxTilt;

      element.style.setProperty('--tilt-x', `${tiltX}deg`);
      element.style.setProperty('--tilt-y', `${tiltY}deg`);
    };

    const handleMouseLeave = () => {
      element.style.setProperty('--tilt-x', '0deg');
      element.style.setProperty('--tilt-y', '0deg');
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt]);

  return { elementRef };
};