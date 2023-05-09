import React from 'react';

import './tab.scss';

export const Tab = ({ base, type, ...props }) => {
  const classNames = [];

  if (base) {
    classNames.push(base);
  }

  if (type) {
    classNames.push(`c-tab--${type}`);
  }

  const [isActive, setActive] = React.useState(false);

  const toggleActive = (index, def) => {
    setActive(index);
  };

  return (
    <ul class="c-tab-wrapper">
      <li class="c-tab-item">
        <button
          className={`${classNames.join(' ')}${
            isActive === 0 ? ' is-active' : ''
          }`}
          {...props}
          onClick={() => toggleActive(0, true)}
        >
          タブ
        </button>
      </li>
      <li class="c-tab-item">
        <button
          className={`${classNames.join(' ')}${
            isActive === 1 ? ' is-active' : ''
          }`}
          {...props}
          onClick={() => toggleActive(1, false)}
        >
          タブ
        </button>
      </li>
      <li class="c-tab-item">
        <button
          className={`${classNames.join(' ')}${
            isActive === 2 ? ' is-active' : ''
          }`}
          {...props}
          onClick={() => toggleActive(2, false)}
        >
          タブ
        </button>
      </li>
    </ul>
  );
};

// デフォルトの状態
Tab.defaultProps = {
  base: 'c-tab',
  type: '',
};
