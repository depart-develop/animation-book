import React from 'react';

import { Tab } from './Tab';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./tab.scss';
import scssBorder from '!!raw-loader!./_tab-border.scss';
import scssUnderline from '!!raw-loader!./_tab-underline.scss';
import TabDoc from './Tab.mdx';

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: TabDoc,
  },
};

// Story設定
export default {
  title: 'Click/Tab',
  component: Tab,
  parameters,
};

const Template = (args) => <Tab {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const Border = Template.bind({});
Border.parameters = {
  ...parameters,
  componentSource: {
    code: scssBorder,
    language: 'scss',
  },
};
Border.args = {
  type: 'underline',
};

export const Underline = Template.bind({});
Underline.parameters = {
  ...parameters,
  componentSource: {
    code: scssUnderline,
    language: 'scss',
  },
};
Underline.args = {
  type: 'border',
};
