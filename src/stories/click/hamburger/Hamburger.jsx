import React from 'react';

import './hamburger.scss';

export const Hamburger = ({ base, type, ...props }) => {
  const classNames = [];
  
  if (base) {
    classNames.push(base);
  }
  
  if (type) {
    classNames.push(`c-hamburger--${type}`);
  }
  
  const [isActive, setActive] = React.useState(false);
  
  const toggleActive = () => {
    setActive(!isActive);
  };
  
  return (
    <button className={`${classNames.join(' ')}${isActive ? ' is-active' : ''}`} {...props} onClick={toggleActive}>
      <span>メニュー</span>
    </button>
  );
};

// デフォルトの状態
Hamburger.defaultProps = {
  base: 'c-hamburger',
  type: '',
};
