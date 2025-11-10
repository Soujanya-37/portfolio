import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Section = ({ id, title, icon, children, className = "", animate = false }) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This IntersectionObserver will check when the section scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the entry is intersecting (visible), set isVisible to true
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we don't need to observe it anymore
          if (ref) {
            observer.unobserve(ref);
          }
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (ref) {
      observer.observe(ref);
    }

    // Cleanup function to unobserve the ref when the component unmounts
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref]); // Only re-run if the ref changes

  // Spring animation for the fade-in effect
  const springProps = useSpring({
    opacity: isVisible || !animate ? 1 : 0,
    transform: isVisible || !animate ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 120, friction: 14 }
  });

  return (
    <animated.section 
      id={id} 
      ref={setRef} // Assign the ref to the section element
      style={animate ? springProps : {}} 
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 ${className}`}
    >
      <div className="flex items-center gap-3 mb-8 sm:mb-10">
        {/* Dynamically create the icon component passed in as a prop */}
        {icon && React.createElement(icon, { className: "w-8 h-8 text-blue-400" })}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </animated.section>
  );
};

export default Section;

