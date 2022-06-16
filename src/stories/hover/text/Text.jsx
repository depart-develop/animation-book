import React from 'react';

import './text.scss';

export const Text = ({ base, type, ...props }) => {
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
    >テキストリンク</a>
  );
};

// デフォルトの状態
Text.defaultProps = {
  base: 'c-txt',
  type: '',
};
