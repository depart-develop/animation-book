import React from 'react';

import './heading.scss';

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Heading = ({ base, type, ...props }) => {
  const classNames = [];
    
  if (base) {
    classNames.push(base);
  }
  
  if (type) {
    classNames.push(`c-scroll-heading--${type}`);
  }
  
  const effectTarget = React.useRef(null);
 
  React.useEffect(() => {
    if (effectTarget.current) {
      ScrollTrigger.create({
        trigger: effectTarget.current,
        start: 'top center',
        onEnter(context) {
          context.trigger?.classList.add("is-active");
        },
        onLeaveBack(context) {
          context.trigger?.classList.remove("is-active");
        },
        scroller: document.body,
        // markers: true,
      });
    }
  }, []);
  
  return (
    <div className='l-scroll-wrapper'>
      <h2 className={`${classNames.join(' ')}`} {...props} ref={effectTarget}>
        <span>Heading Text</span>
      </h2>
    </div>
  );
};

// デフォルトの状態
Heading.defaultProps = {
  base: 'c-scroll-heading',
  type: '',
};
