import React from 'react';

import { Text } from './Text';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./text.scss';
import scssOpacity from '!!raw-loader!./_text-opacity.scss';
import scssUnderline from '!!raw-loader!./_text-underline.scss';
import scssNoUnderline from '!!raw-loader!./_text-no-underline.scss';
import scssSpreadUnderline from '!!raw-loader!./_text-spread-underline.scss';
import scssSpreadLine from '!!raw-loader!./_text-spread-line.scss';
import scssSpreadLinetxt from '!!raw-loader!./_text-spread-linetxt.scss';
import scssArrow from '!!raw-loader!./_text-arrow.scss';
import scssBorderArrow from '!!raw-loader!./_text-border-arrow.scss';
import TextDoc from './Text.mdx';

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: TextDoc,
  },
};

// Story設定
export default {
  title: 'Hover/Text',
  component: Text,
  parameters,
};

const Template = (args) => <Text {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const Opacity = Template.bind({});
Opacity.parameters = {
  ...parameters,
  componentSource: {
    code: scssOpacity,
    language: 'scss',
  },
};
Opacity.args = {
  type: 'opacity',
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
  type: 'underline',
};

export const NoUnderline = Template.bind({});
NoUnderline.parameters = {
  ...parameters,
  componentSource: {
    code: scssNoUnderline,
    language: 'scss',
  },
};
NoUnderline.args = {
  type: 'no-underline',
};

export const SpreadUnderline = Template.bind({});
SpreadUnderline.parameters = {
  ...parameters,
  componentSource: {
    code: scssSpreadUnderline,
    language: 'scss',
  },
};
SpreadUnderline.args = {
  type: 'spread-underline',
};

export const SpreadLine = Template.bind({});
SpreadLine.parameters = {
  ...parameters,
  componentSource: {
    code: scssSpreadLine,
    language: 'scss',
  },
};
SpreadLine.args = {
  type: 'spread-line',
};

export const SpreadLinetxt = Template.bind({});
SpreadLinetxt.parameters = {
  ...parameters,
  componentSource: {
    code: scssSpreadLinetxt,
    language: 'scss',
  },
};
SpreadLinetxt.args = {
  type: 'spread-linetxt',
};

export const Arrow = Template.bind({});
Arrow.parameters = {
  ...parameters,
  componentSource: {
    code: scssArrow,
    language: 'scss',
  },
};
Arrow.args = {
  base: 'c-txt-arrow',
  type: 'arrow',
};
export const BorderArrow = Template.bind({});
BorderArrow.parameters = {
  ...parameters,
  componentSource: {
    code: scssBorderArrow,
    language: 'scss',
  },
};
BorderArrow.args = {
  type: 'border-arrow',
  pt: 1,
};
