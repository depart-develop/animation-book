import React from 'react';

import './block.scss';

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Block = ({ base, type, ...props }) => {
  const classNames = [];
  
  classNames.push('l-box');
  
  if (base) {
    classNames.push(base);
  }
  
  if (type) {
    classNames.push(`${type}`);
  }
  
  const scrollBox = React.useRef(null);
 
  React.useEffect(() => {
    if (scrollBox.current) {
      ScrollTrigger.create({
        trigger: scrollBox.current,
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
      <div className={`${classNames.join(' ')}`} {...props} ref={scrollBox}>
        ↑の線（この要素自体）が画面の中央まで来たらアニメーションする
      </div>
    </div>
  );
};

// デフォルトの状態
Block.defaultProps = {
  base: 'p-scroll-box',
  type: '',
};
