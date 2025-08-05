import React, { ReactNode } from 'react';
import { useWebflowAnimation, useStaggeredWebflowAnimation, useMagneticHover, useCardTilt } from '@/hooks/useWebflowAnimations';

interface AnimatedSectionProps {
  children: ReactNode;
  animationType?: 'fade' | 'slide' | 'scale' | 'rotate';
  direction?: 'up' | 'down' | 'left' | 'right' | 'center';
  className?: string;
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animationType = 'fade',
  direction = 'up',
  className = '',
  delay = 0
}) => {
  const { elementRef, animationClass } = useWebflowAnimation({ 
    animationType, 
    direction,
    threshold: 0.1
  });

  return (
    <div 
      ref={elementRef as any}
      className={`${animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface StaggeredContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className = '',
  staggerDelay = 100
}) => {
  const childrenArray = React.Children.toArray(children);
  const { containerRef, getItemProps } = useStaggeredWebflowAnimation(
    childrenArray.length,
    { staggerDelay }
  );

  return (
    <div ref={containerRef as any} className={`stagger-animation ${className}`}>
      {childrenArray.map((child, index) => (
        <div key={index} {...getItemProps(index)}>
          {child}
        </div>
      ))}
    </div>
  );
};

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'default' | 'morph' | 'glow';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  variant = 'default'
}) => {
  const { elementRef } = useMagneticHover();

  const baseClasses = 'magnetic-hover transition-all duration-300 ease-out cursor-pointer';
  const variantClasses = {
    default: 'hover-lift',
    morph: 'morph-button',
    glow: 'hover:shadow-lg'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        ref={elementRef as any}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={elementRef as any}
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 15
}) => {
  const { elementRef } = useCardTilt(maxTilt);

  return (
    <div
      ref={elementRef as any}
      className={`tilt-card ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  animationType?: 'gentle' | 'offset' | 'particle';
  delay?: number;
  onClick?: () => void;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  animationType = 'gentle',
  delay = 0,
  onClick
}) => {
  const animationClass = {
    gentle: 'animate-float-gentle',
    offset: 'animate-float-offset',
    particle: 'animate-particle-float'
  }[animationType];

  return (
    <div 
      className={`${animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const ScrollProgressBar: React.FC<{ className?: string }> = ({ 
  className = '' 
}) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-1 bg-muted z-50 ${className}`}>
      <div 
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0
}) => {
  const { elementRef, isVisible } = useWebflowAnimation({ 
    animationType: 'fade', 
    direction: 'up' 
  });

  return (
    <div 
      ref={elementRef as any}
      className={`${isVisible ? 'animate-text-reveal' : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </div>
  );
};