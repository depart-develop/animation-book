import React from 'react';

import { Text } from './Text';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./_text-marker.scss';
import TextDoc from './Text.mdx'

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: TextDoc,
  }
};

// Story設定
export default {
  title: 'Scroll/Text',
  component: Text,
  parameters,
};

const Template = (args) => <Text {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const Marker = Template.bind({});
Marker.parameters = {
  ...parameters,
  componentSource: {
    code: scss,
    language: 'scss',
  }
};
Marker.args = {
  type: 'marker',
};
