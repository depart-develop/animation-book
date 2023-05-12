import React from 'react';

import './text.scss';

export const Text = ({ base, type, pt, ...props }) => {
  const classNames = [];

  if (base) {
    classNames.push(base);
  }

  if (type) {
    classNames.push(`${base}--${type}`);
  }
  if (pt == 1) {
    return (
      <a className={classNames.join(' ')} {...props}>
        <p class="txt">ニュース</p>
        <i class="icon"></i>
      </a>
    );
  }

  return (
    <a href="dummy" className={classNames.join(' ')} {...props}>テキストリンク</a>
  );
};

// デフォルトの状態
Text.defaultProps = {
  base: 'c-txt',
  type: '',
};
