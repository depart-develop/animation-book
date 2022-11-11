import React from 'react';

// Storyで表示するコンポーネントの読み込み
import { Card } from './Card';

/* eslint-disable import/no-webpack-loader-syntax */
// Storyで表示するScssの読み込み
import scss from '!!raw-loader!./card.scss';
import scssFloat from '!!raw-loader!./_card-float.scss';
import scssPush from '!!raw-loader!./_card-push.scss';
import scssGrayscale from '!!raw-loader!./_card-grayscale.scss';
import scssBright from '!!raw-loader!./_card-bright.scss';
import scssZoom from '!!raw-loader!./_card-zoom.scss';
import scssTxt from '!!raw-loader!./_card-txt.scss';
import scssSlidetxt from '!!raw-loader!./_card-slidetxt.scss';

// ドキュメント（コンポーネントのタイプ一覧）の読み込み
import CardDoc from './Card.mdx'

const parameters = {
  componentSource: {
    code: scss,
    language: 'scss',
  },
  docs: {
    page: CardDoc,
  }
};

// Story設定
export default {
  title: 'Hover/Card', // 【グループ名】/【コンポーネント名】で定義
  component: Card,
  parameters,
};

const Template = (args) => <Card {...args} />;

// デフォルトのStoryを出力
// export const Default = Template.bind({});

// FloatのStoryを出力
export const Float = Template.bind({});
// FloatのStory設定
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

export const Push = Template.bind({});
Push.parameters = {
  ...parameters,
  componentSource: {
    code: scssPush,
    language: 'scss',
  }
};
Push.args = {
  type: 'push',
};

export const Grayscale = Template.bind({});
Grayscale.parameters = {
  ...parameters,
  componentSource: {
    code: scssGrayscale,
    language: 'scss',
  }
};
Grayscale.args = {
  type: 'grayscale',
};

export const Bright = Template.bind({});
Bright.parameters = {
  ...parameters,
  componentSource: {
    code: scssBright,
    language: 'scss',
  }
};
Bright.args = {
  type: 'bright',
};

export const Zoom = Template.bind({});
Zoom.parameters = {
  ...parameters,
  componentSource: {
    code: scssZoom,
    language: 'scss',
  }
};
Zoom.args = {
  zoom: true,
};

export const Txt = Template.bind({});
Txt.parameters = {
  ...parameters,
  componentSource: {
    code: scssTxt,
    language: 'scss',
  }
};
Txt.args = {
  zoom: true,
  type: 'txt',
  moreText: true,
};

export const Slidetxt = Template.bind({});
Slidetxt.parameters = {
  ...parameters,
  componentSource: {
    code: scssSlidetxt,
    language: 'scss',
  }
};
Slidetxt.args = {
  zoom: true,
  type: 'slidetxt',
  moreText: true,
};