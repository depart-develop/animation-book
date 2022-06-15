import React from 'react';

// コンポーネントで使用するスタイルを読み込む
import './card.scss';

// コンポーネント内で使用する画像があれば読み込んで変数に格納する
import dummyImage from './img/dummy.jpg';

// 引数で条件を受け取る
export const Card = ({ shadow, type, zoom, moreText, ...props }) => {
  const classNames = [];
  
  // 影付きカード
  if (shadow) {
    classNames.push('c-card__shadow');
  } else {
    classNames.push('c-card');
  }
  
  // アニメーションのサブクラス（Modifier）
  if (type) {
    classNames.push(`c-card-hover--${type}`);
  }
  
  // ズームアニメーションのサブクラス（Modifier）
  if (zoom) {
    classNames.push('c-card-hover--zoom');
  }
  
  // return ( ここにマークアップを書く )
  return (
    <a className={classNames.join(' ')}
    {...props}
    >
      <div class="c-card__img">
        <img src={dummyImage} alt=""/>
        {moreText && <div class="c-card-hover--txt__more">More</div>}
      </div>
      <div class="c-card__txt">ダミーダミーダミーダミー</div>
    </a>
  );
};

// デフォルトの状態
Card.defaultProps = {
  shadow: false,
  type: '',
  zoom: false,
};
