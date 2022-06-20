import React from 'react';

import { Hamburger } from './Hamburger';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./hamburger.scss';
import scssRotate01 from '!!raw-loader!./_hamburger-rotate01.scss';
import scssRotate02 from '!!raw-loader!./_hamburger-rotate02.scss';
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

export const Rotate01 = Template.bind({});
Rotate01.parameters = {
  ...parameters,
  componentSource: {
    code: scssRotate01,
    language: 'scss',
  }
};
Rotate01.args = {
  type: 'rotate01',
};

export const Rotate02 = Template.bind({});
Rotate02.parameters = {
  ...parameters,
  componentSource: {
    code: scssRotate02,
    language: 'scss',
  }
};
Rotate02.args = {
  type: 'rotate02',
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
