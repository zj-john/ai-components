import React from 'react';
import EmptyImage from './empty.png';
import './index.less';
import LoadingImage from './rotate.gif';

interface ImageResultCardProps {
  content: any;
  loading: boolean;
  status: string;
}

const ImageResultCard = ({ content, loading }: ImageResultCardProps) => {
  const { imageArray = [] } = content || {};
  return (
    <div className="component-image-result-card">
      {loading ? (
        <div className="loading empty">
          <img src={LoadingImage} />
          <div className="desc">正在生成中~</div>
        </div>
      ) : imageArray.length > 0 ? (
        <div className="content">
          {imageArray.length === '1' && <div className="single"></div>}
          {imageArray.length > '1' && <div className="multi"></div>}
        </div>
      ) : (
        <div className="empty">
          <img src={EmptyImage} />
          <div className="desc">Hi，在左侧输入你的创意吧~</div>
        </div>
      )}
    </div>
  );
};

export default ImageResultCard;
