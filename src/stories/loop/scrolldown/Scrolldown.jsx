import React from 'react';

import './scrolldown.scss';

export const Scrolldown = ({ base, type, ...props }) => {
  const classNames = [];

  if (base) {
    classNames.push(base);
  }
  
  if (type) {
    classNames.push(`${type}`);
  }

  return (
    <p className={`${classNames.join(' ')}`} {...props}>
      <span>Scroll Down</span>
      { type === 'c-scrolldown--chevron' && <span className="chevron"><span></span><span></span><span></span></span> }
    </p>
  );
};

// デフォルトの状態
Scrolldown.defaultProps = {
  base: 'c-scrolldown',
  type: '',
};
