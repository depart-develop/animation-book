import React from 'react';

import './button.scss';

export const Button = ({ base, type, ...props }) => {
  const classNames = [];
  
  if (base) {
    classNames.push(base);
  }
  
  if (type) {
    classNames.push(`c-hover__${type}`);
  }
  
  return (
    <a className={classNames.join(' ')}
    {...props}
    >ボタン</a>
  );
};

// デフォルトの状態
Button.defaultProps = {
  base: 'c-btn',
  type: '',
};
