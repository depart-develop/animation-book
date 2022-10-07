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
import ButtonDoc from './Button.mdx'

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: ButtonDoc,
  }
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
  }
};
Inversion.args = {
  type: 'inversion',
};

export const Fill = Template.bind({});
Fill.parameters = {
  ...parameters,
  componentSource: {
    code: scssFill,
    language: 'scss',
  }
};
Fill.args = {
  type: 'fill',
};

export const FillToright = Template.bind({});
FillToright.parameters = {
  ...parameters,
  componentSource: {
    code: scssFillToright,
    language: 'scss',
  }
};
FillToright.args = {
  type: 'fill-toright',
};

export const FillSkew = Template.bind({});
FillSkew.parameters = {
  ...parameters,
  componentSource: {
    code: scssFillSkew,
    language: 'scss',
  }
};
FillSkew.args = {
  type: 'fill-skew',
};

export const FillSkewToright = Template.bind({});
FillSkewToright.parameters = {
  ...parameters,
  componentSource: {
    code: scssFillSkewToright,
    language: 'scss',
  }
};
FillSkewToright.args = {
  type: 'fill-skew-toright',
};

export const BulkUp = Template.bind({});
BulkUp.parameters = {
  ...parameters,
  componentSource: {
    code: scssBulkUp,
    language: 'scss',
  }
};
BulkUp.args = {
  type: 'bulk-up',
};

export const Float = Template.bind({});
Float.parameters = {
  ...parameters,
  componentSource: {
    code: scssFloat,
    language: 'scss',
  }
};
Float.args = {
  type: 'float',
};

export const DoubleBorder = Template.bind({});
DoubleBorder.parameters = {
  ...parameters,
  componentSource: {
    code: scssDoubleBorder,
    language: 'scss',
  }
};
DoubleBorder.args = {
  type: 'double-border',
};

export const Card = Template.bind({});
Card.parameters = {
  ...parameters,
  componentSource: {
    code: scssCard,
    language: 'scss',
  }
};
Card.args = {
  type: 'card',
};

export const Gradation = Template.bind({});
Gradation.parameters = {
  ...parameters,
  componentSource: {
    code: scssGradation,
    language: 'scss',
  }
};
Gradation.args = {
  type: 'gradation',
};

export const GradationBorder = Template.bind({});
GradationBorder.parameters = {
  ...parameters,
  componentSource: {
    code: scssGradationBorder,
    language: 'scss',
  }
};
GradationBorder.args = {
  type: 'gradation-border',
};

export const Focus = Template.bind({});
Focus.parameters = {
  ...parameters,
  componentSource: {
    code: scssFocus,
    language: 'scss',
  }
};
Focus.args = {
  type: 'focus',
};
