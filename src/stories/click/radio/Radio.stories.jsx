import React from "react";

import { Radio } from "./Radio";

/* eslint-disable import/no-webpack-loader-syntax */
import scss from "!!raw-loader!./radio.scss";
import scssColor from "!!raw-loader!./_radio-color.scss";
import scssGhost from "!!raw-loader!./_radio-ghost.scss";
import scssScale from "!!raw-loader!./_radio-scale.scss";
import RadioDoc from "./Radio.mdx";

const parameters = {
  componentSource: {
    code: scss,
    language: "scss",
  },
  docs: {
    page: RadioDoc,
  },
};

// Story設定
export default {
  title: "Click/Radio",
  component: Radio,
  parameters,
};

const Template = (args) => <Radio {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const Color = Template.bind({});
Color.parameters = {
  ...parameters,
  componentSource: {
    code: scssColor,
    language: "scss",
  },
};
Color.args = {
  type: "color",
};

export const Ghost = Template.bind({});
Ghost.parameters = {
  ...parameters,
  componentSource: {
    code: scssGhost,
    language: "scss",
  },
};
Ghost.args = {
  type: "ghost",
};

export const Scale = Template.bind({});
Scale.parameters = {
  ...parameters,
  componentSource: {
    code: scssScale,
    language: "scss",
  },
};
Scale.args = {
  type: "scale",
};
