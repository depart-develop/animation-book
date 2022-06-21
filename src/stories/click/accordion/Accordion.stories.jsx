import React from 'react';

import { Accordion } from './Accordion';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./accordion.scss';
import scssRotate from '!!raw-loader!./_accordion-rotate.scss';
import scssRough from '!!raw-loader!./_accordion-rough.scss';
import AccordionDoc from './Accordion.mdx'

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: AccordionDoc,
  }
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
  }
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
  }
};
Rough.args = {
  type: 'rough',
};
