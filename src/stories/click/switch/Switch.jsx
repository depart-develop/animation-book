import React from "react";

import "./switch.scss";

export const Switch = ({ base, type, ...props }) => {
  const classNames = [];

  if (base) {
    classNames.push(base);
  }

  if (type) {
    classNames.push(`c-switch--${type}`);
  }

  return (
    <label className={classNames.join(" ")} {...props}>
      <input type="checkbox" class="c-switch__input" />
      <span className="c-switch__btn"></span>
    </label>
  );
};

// デフォルトの状態
Switch.defaultProps = {
  base: "c-switch",
  type: "",
};
