import React from "react";

import "./radio.scss";

export const Radio = ({ base, type, ...props }) => {
  const classNames = [];

  if (base) {
    classNames.push(base);
  }

  if (type) {
    classNames.push(`c-radio-btn--${type}`);
  }

  return (
    <label for={`checkbox_${type}_01`} class="c-formparts__radio">
      <input
        id={`checkbox_${type}_01`}
        type="radio"
        class="c-formparts__radio-item"
      />
      <span className={classNames.join(" ")} {...props}></span>
      <span class="c-formparts__radio-txt">テキスト</span>
    </label>
  );
};

// デフォルトの状態
Radio.defaultProps = {
  base: "c-radio-btn",
  type: "",
};
