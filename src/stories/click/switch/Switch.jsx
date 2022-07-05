import React from "react";

import "./switch.scss";

export const Switch = ({ base, type, ...props }) => {
  const classNames = [];

  if (base) {
    classNames.push(base);
  }

  if (type) {
    classNames.push(`c-switch-btn--${type}`);
  }

  return (
    <label for={`checkbox_${type}`}>
      <input
        id={`checkbox_${type}`}
        type="checkbox"
        class="c-switch-checkbox"
      />
      <span className={classNames.join(" ")} {...props}></span>
    </label>
  );
};

// デフォルトの状態
Switch.defaultProps = {
  base: "c-switch-btn",
  type: "",
};
