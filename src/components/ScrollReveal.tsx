import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Mapping of animation names to Tailwind classes
const animationClasses = {
  fade: 'transition-opacity duration-500 opacity-0',
  slide: 'transition-transform duration-500 transform translate-y-4 opacity-0',
  // add more mappings as needed
};

const ScrollReveal = ({ children, animation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Dev-only toggle button for manual testing
  const [forceReveal, setForceReveal] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setForceReveal(prev => !prev)} 
        className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded"
      >
        Toggle Force Reveal
      </button>
      <div ref={ref} className={`${isVisible || forceReveal ? animationClasses[animation] || '' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default ScrollReveal;