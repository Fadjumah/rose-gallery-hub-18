import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'scale-in' | 'slide-in-right' | 'slide-in-left';
  delay?: number;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold });

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && `animate-${animation}`,
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
