import React from 'react';

import './button.scss';

export const Button = ({ base, type, pt, ...props }) => {
  const classNames = [];

  if (base) {
    classNames.push(base);
  }

  if (type) {
    classNames.push(`c-btn--${type}`);
  }
  if (pt == 1) {
    return (
      <a className={classNames.join(' ')} {...props}>
        <span>ボタン</span>
      </a>
    );
  }
  return (
    <a className={classNames.join(' ')} {...props}>
      ボタン
    </a>
  );
};

// デフォルトの状態
Button.defaultProps = {
  base: 'c-btn',
  type: '',
  pt: 0,
};
