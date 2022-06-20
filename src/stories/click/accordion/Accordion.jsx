import React from 'react';

import './accordion.scss';

export const Accordion = ({ base, type, ...props }) => {
  const classNames = [];
  
  if (base) {
    classNames.push(base);
  }
  
  if (type) {
    classNames.push(`c-accordion--${type}`);
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
Accordion.defaultProps = {
  base: 'c-accordion',
  type: '',
};
