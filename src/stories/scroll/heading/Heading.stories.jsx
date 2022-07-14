import React from 'react';

import { Heading } from './Heading';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./heading.scss';
import scssShadow from '!!raw-loader!./_heading-shadow.scss';
import scssDraw from '!!raw-loader!./_heading-draw.scss';
import HeadingDoc from './Heading.mdx'

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: HeadingDoc,
  }
};

// Story設定
export default {
  title: 'Scroll/Heading',
  component: Heading,
  parameters,
};

const Template = (args) => <Heading {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const Shadow = Template.bind({});
Shadow.parameters = {
  ...parameters,
  componentSource: {
    code: scssShadow,
    language: 'scss',
  }
};
Shadow.args = {
  type: 'shadow',
};

export const Draw = Template.bind({});
Draw.parameters = {
  ...parameters,
  componentSource: {
    code: scssDraw,
    language: 'scss',
  }
};
Draw.args = {
  type: 'draw',
};
