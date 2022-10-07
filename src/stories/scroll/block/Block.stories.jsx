import React from 'react';

import { Block } from './Block';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./block.scss';
import BlockDoc from './Block.mdx'

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: BlockDoc,
  }
};

// Story設定
export default {
  title: 'Scroll/Block',
  component: Block,
  parameters,
};

const Template = (args) => <Block {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const Top = Template.bind({});
Top.parameters = {
  ...parameters,
  componentSource: {
    code: scss,
    language: 'scss',
  }
};
Top.args = {
  type: 'gasp-st-top-top',
};
