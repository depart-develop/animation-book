import React from 'react';

import { Scrolldown } from './Scrolldown';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./scrolldown.scss';
import scssLine from '!!raw-loader!./_scrolldown-line.scss';
import scssMouse from '!!raw-loader!./_scrolldown-mouse.scss';
import scssChevron from '!!raw-loader!./_scrolldown-chevron.scss';
import ScrolldownDoc from './Scrolldown.mdx'

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: ScrolldownDoc,
  }
};

// Story設定
export default {
  title: 'Loop/Scrolldown',
  component: Scrolldown,
  parameters,
};

const Template = (args) => <Scrolldown {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const Line = Template.bind({});
Line.parameters = {
  ...parameters,
  componentSource: {
    code: scssLine,
    language: 'scss',
  }
};
Line.args = {
  type: 'c-scrolldown--line',
};

export const Mouse = Template.bind({});
Mouse.parameters = {
  ...parameters,
  componentSource: {
    code: scssMouse,
    language: 'scss',
  }
};
Mouse.args = {
  type: 'c-scrolldown--mouse',
};

export const Chevron = Template.bind({});
Chevron.parameters = {
  ...parameters,
  componentSource: {
    code: scssChevron,
    language: 'scss',
  }
};
Chevron.args = {
  type: 'c-scrolldown--chevron',
};