import React from 'react';
import gsap from 'gsap';

import './tooltip.scss';
import dummyImage from './img/dummy.jpg';

export const Tooltip = ({ base, type, ...props }) => {
  const classNames = [];
  
  if (base) {
    classNames.push(base);
  }
  
  if (type) {
    classNames.push(`c-tooltip--${type}`);
  }
  
  const tooltip = React.useRef(null);
  
  document.addEventListener('mousemove', (e) => {
    if (type === 'stalker' && tooltip.current) {
      gsap.to(tooltip.current, {
        x: e.pageX,
        y: e.pageY,
      });
    }
  }, { passive: true });

  return (
    <div className="c-card c-tooltip-wrap">
      <div className="c-card__img">
        <img src={dummyImage} alt="" />
      </div>
      <div className={classNames.join(' ')} {...props} ref={tooltip}>
        木の画像です
      </div>
    </div>
  );
};

// デフォルトの状態
Tooltip.defaultProps = {
  base: 'c-tooltip',
  type: '',
};
