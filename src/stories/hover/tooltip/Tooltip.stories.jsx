import React from 'react';

import { Tooltip } from './Tooltip';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./tooltip.scss';
import scssToTop from '!!raw-loader!./_tooltip-to-top.scss';
import scssToBottom from '!!raw-loader!./_tooltip-to-bottom.scss';
import scssStalker from '!!raw-loader!./_tooltip-stalker.scss';
import TooltipDoc from './Tooltip.mdx'

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: TooltipDoc,
  }
};

// Story設定
export default {
  title: 'Hover/Tooltip',
  component: Tooltip,
  parameters,
};

const Template = (args) => <Tooltip {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const ToTop = Template.bind({});
ToTop.parameters = {
  ...parameters,
  componentSource: {
    code: scssToTop,
    language: 'scss',
  }
};
ToTop.args = {
  type: 'to-top',
};

export const ToBottom = Template.bind({});
ToBottom.parameters = {
  ...parameters,
  componentSource: {
    code: scssToBottom,
    language: 'scss',
  }
};
ToBottom.args = {
  type: 'to-bottom',
};

export const Stalker = Template.bind({});
Stalker.parameters = {
  ...parameters,
  componentSource: {
    code: scssStalker,
    language: 'scss',
  }
};
Stalker.args = {
  type: 'stalker',
};
