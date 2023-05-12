import React from 'react';

import './text.scss';

import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Text = ({ base, type, ...props }) => {
  const classNames = [];
    
  if (base) {
    classNames.push(base);
  }
  
  if (type) {
    classNames.push(`c-scroll-text--${type}`);
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
      <p className={`${classNames.join(' ')}`} {...props} ref={effectTarget}>
        <span className={`${base}__text`}>画面中央までスクロールされるとアニメーションが開始する。<br/>
        複数行のテキストにも対応。</span>
      </p>
    </div>
  );
};

// デフォルトの状態
Text.defaultProps = {
  base: 'c-scroll-text',
  type: '',
};
