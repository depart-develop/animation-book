import React from 'react';

import { Accordion } from './Accordion';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./accordion.scss';
import scssRotate from '!!raw-loader!./_accordion-rotate.scss';
import scssRough from '!!raw-loader!./_accordion-rough.scss';
import scssCross_rotate from '!!raw-loader!./_accordion-cross-rotate.scss';
import scssCross_scale from '!!raw-loader!./_accordion-cross-scale.scss';
import scssCross_close from '!!raw-loader!./_accordion-cross-close.scss';
import AccordionDoc from './Accordion.mdx';

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: AccordionDoc,
  },
};

// Story設定
export default {
  title: 'Click/Accordion',
  component: Accordion,
  parameters,
};

const Template = (args) => <Accordion {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const Rotate = Template.bind({});
Rotate.parameters = {
  ...parameters,
  componentSource: {
    code: scssRotate,
    language: 'scss',
  },
};
Rotate.args = {
  type: 'rotate',
};

export const Rough = Template.bind({});
Rough.parameters = {
  ...parameters,
  componentSource: {
    code: scssRough,
    language: 'scss',
  },
};
Rough.args = {
  type: 'rough',
};

export const Cross_rotate = Template.bind({});
Cross_rotate.parameters = {
  ...parameters,
  componentSource: {
    code: scssCross_rotate,
    language: 'scss',
  },
};
Cross_rotate.args = {
  base: 'c-accordion-cross',
  type: 'cross-rotate',
};

export const Cross_scale = Template.bind({});
Cross_scale.parameters = {
  ...parameters,
  componentSource: {
    code: scssCross_scale,
    language: 'scss',
  },
};
Cross_scale.args = {
  base: 'c-accordion-cross',
  type: 'cross-scale',
};

export const Cross_close = Template.bind({});
Cross_close.parameters = {
  ...parameters,
  componentSource: {
    code: scssCross_close,
    language: 'scss',
  },
};
Cross_close.args = {
  base: 'c-accordion-cross',
  type: 'cross-close',
};
