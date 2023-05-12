import React from 'react';

import { Button } from './Button';

/* eslint-disable import/no-webpack-loader-syntax */
import scss from '!!raw-loader!./button.scss';
import scssInversion from '!!raw-loader!./_button-inversion.scss';
import scssFill from '!!raw-loader!./_button-fill.scss';
import scssFillToright from '!!raw-loader!./_button-fill-toright.scss';
import scssFillSkew from '!!raw-loader!./_button-fill-skew.scss';
import scssFillSkewToright from '!!raw-loader!./_button-fill-skew-toright.scss';
import scssBulkUp from '!!raw-loader!./_button-bulk-up.scss';
import scssFloat from '!!raw-loader!./_button-float.scss';
import scssDoubleBorder from '!!raw-loader!./_button-double-border.scss';
import scssCard from '!!raw-loader!./_button-card.scss';
import scssGradation from '!!raw-loader!./_button-gradation.scss';
import scssGradationBorder from '!!raw-loader!./_button-gradation-border.scss';
import scssFocus from '!!raw-loader!./_button-focus.scss';
import scssArrowScale from '!!raw-loader!./_button-arrow-scale.scss';
import scssFillCircle from '!!raw-loader!./_button-fill-circle.scss';
import scssPudding from '!!raw-loader!./_button-pudding.scss';
import ButtonDoc from './Button.mdx';

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: ButtonDoc,
  },
};

// Story設定
export default {
  title: 'Hover/Button',
  component: Button,
  parameters,
};

const Template = (args) => <Button {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

export const Inversion = Template.bind({});
Inversion.parameters = {
  ...parameters,
  componentSource: {
    code: scssInversion,
    language: 'scss',
  },
};
Inversion.args = {
  type: 'inversion',
  pt: 0,
};

export const Fill = Template.bind({});
Fill.parameters = {
  ...parameters,
  componentSource: {
    code: scssFill,
    language: 'scss',
  },
};
Fill.args = {
  type: 'fill',
  pt: 0,
};

export const FillToright = Template.bind({});
FillToright.parameters = {
  ...parameters,
  componentSource: {
    code: scssFillToright,
    language: 'scss',
  },
};
FillToright.args = {
  type: 'fill-toright',
  pt: 0,
};

export const FillSkew = Template.bind({});
FillSkew.parameters = {
  ...parameters,
  componentSource: {
    code: scssFillSkew,
    language: 'scss',
  },
};
FillSkew.args = {
  type: 'fill-skew',
  pt: 0,
};

export const FillSkewToright = Template.bind({});
FillSkewToright.parameters = {
  ...parameters,
  componentSource: {
    code: scssFillSkewToright,
    language: 'scss',
  },
};
FillSkewToright.args = {
  type: 'fill-skew-toright',
  pt: 0,
};

export const BulkUp = Template.bind({});
BulkUp.parameters = {
  ...parameters,
  componentSource: {
    code: scssBulkUp,
    language: 'scss',
  },
};
BulkUp.args = {
  type: 'bulk-up',
  pt: 0,
};

export const Float = Template.bind({});
Float.parameters = {
  ...parameters,
  componentSource: {
    code: scssFloat,
    language: 'scss',
  },
};
Float.args = {
  type: 'float',
  pt: 0,
};

export const DoubleBorder = Template.bind({});
DoubleBorder.parameters = {
  ...parameters,
  componentSource: {
    code: scssDoubleBorder,
    language: 'scss',
  },
};
DoubleBorder.args = {
  type: 'double-border',
  pt: 0,
};

export const Card = Template.bind({});
Card.parameters = {
  ...parameters,
  componentSource: {
    code: scssCard,
    language: 'scss',
  },
};
Card.args = {
  type: 'card',
  pt: 0,
};

export const Gradation = Template.bind({});
Gradation.parameters = {
  ...parameters,
  componentSource: {
    code: scssGradation,
    language: 'scss',
  },
};
Gradation.args = {
  type: 'gradation',
  pt: 0,
};

export const GradationBorder = Template.bind({});
GradationBorder.parameters = {
  ...parameters,
  componentSource: {
    code: scssGradationBorder,
    language: 'scss',
  },
};
GradationBorder.args = {
  type: 'gradation-border',
  pt: 0,
};

export const Focus = Template.bind({});
Focus.parameters = {
  ...parameters,
  componentSource: {
    code: scssFocus,
    language: 'scss',
  },
};
Focus.args = {
  type: 'focus',
  pt: 0,
};

export const ArrowScale = Template.bind({});
ArrowScale.parameters = {
  ...parameters,
  componentSource: {
    code: scssArrowScale,
    language: 'scss',
  },
};
ArrowScale.args = {
  type: 'arrow-scale',
  pt: 1,
};
export const FillCircle = Template.bind({});
FillCircle.parameters = {
  ...parameters,
  componentSource: {
    code: scssFillCircle,
    language: 'scss',
  },
};
FillCircle.args = {
  type: 'fill-circle',
  pt: 1,
};
export const Pudding = Template.bind({});
Pudding.parameters = {
  ...parameters,
  componentSource: {
    code: scssPudding,
    language: 'scss',
  },
};
Pudding.args = {
  type: 'pudding',
  pt: 0,
};
