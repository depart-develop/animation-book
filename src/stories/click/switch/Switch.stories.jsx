import React from "react";

import { Switch } from "./Switch";

/* eslint-disable import/no-webpack-loader-syntax */
import scss from "!!raw-loader!./switch.scss";
import scssMovecolor from "!!raw-loader!./_switch-movecolor.scss";
import scssMove from "!!raw-loader!./_switch-move.scss";
import scssSlide from "!!raw-loader!./_switch-slide.scss";
import scssSlidecolor from "!!raw-loader!./_switch-slidecolor.scss";
import SwitchDoc from "./Switch.mdx";

const parameters = {
  componentSource: {
    code: scss,
    language: "scss",
  },
  docs: {
    page: SwitchDoc,
  },
};

// Story設定
export default {
  title: "Click/Switch",
  component: Switch,
  parameters,
};

const Template = (args) => <Switch {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const Movecolor = Template.bind({});
Movecolor.parameters = {
  ...parameters,
  componentSource: {
    code: scssMovecolor,
    language: "scss",
  },
};
Movecolor.args = {
  type: "movecolor",
};

export const Move = Template.bind({});
Move.parameters = {
  ...parameters,
  componentSource: {
    code: scssMove,
    language: "scss",
  },
};
Move.args = {
  type: "move",
};

export const Slide = Template.bind({});
Slide.parameters = {
  ...parameters,
  componentSource: {
    code: scssSlide,
    language: "scss",
  },
};
Slide.args = {
  type: "slide",
};

export const Slidecolor = Template.bind({});
Slidecolor.parameters = {
  ...parameters,
  componentSource: {
    code: scssSlidecolor,
    language: "scss",
  },
};
Slidecolor.args = {
  type: "slidecolor",
};
