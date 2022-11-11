import React from 'react';

import { Hamburger } from './Hamburger';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./hamburger.scss';
import scssRotate from '!!raw-loader!./_hamburger-rotate.scss';
import scssReverse from '!!raw-loader!./_hamburger-reverse.scss';
import scssFade from '!!raw-loader!./_hamburger-fade.scss';
import scssCongregate from '!!raw-loader!./_hamburger-congregate.scss';
import HamburgerDoc from './Hamburger.mdx'

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: HamburgerDoc,
  }
};

// Story設定
export default {
  title: 'Click/Hamburger',
  component: Hamburger,
  parameters,
};

const Template = (args) => <Hamburger {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const Rotate = Template.bind({});
Rotate.parameters = {
  ...parameters,
  componentSource: {
    code: scssRotate,
    language: 'scss',
  }
};
Rotate.args = {
  type: 'rotate',
};

export const Reverse = Template.bind({});
Reverse.parameters = {
  ...parameters,
  componentSource: {
    code: scssReverse,
    language: 'scss',
  }
};
Reverse.args = {
  type: 'reverse',
};

export const Fade = Template.bind({});
Fade.parameters = {
  ...parameters,
  componentSource: {
    code: scssFade,
    language: 'scss',
  }
};
Fade.args = {
  type: 'fade',
};

export const Congregate = Template.bind({});
Congregate.parameters = {
  ...parameters,
  componentSource: {
    code: scssCongregate,
    language: 'scss',
  }
};
Congregate.args = {
  type: 'congregate',
};
