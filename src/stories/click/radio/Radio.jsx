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
    <label class="c-form-radio">
      <input type="radio" class="c-form-radio__input" />
      <span className={classNames.join(" ")} {...props}></span>
      <span class="c-form-radio__txt">テキスト</span>
    </label>
  );
};

// デフォルトの状態
Radio.defaultProps = {
  base: "c-radio-btn",
  type: "",
};
