import React from 'react';
import './index.less';

interface ImageResultCardProps {
  content: any;
  loading: boolean;
  status: string;
}

const NoContentImage = 'https://dummyimage.com/180x180/ff0/000';

const ImageResultCard = ({
  content,
  loading,
  status,
}: ImageResultCardProps) => {
  const { imageArray = [] } = content || {};
  return (
    <div className="component-image-result-card">
      {loading ? (
        <div className="loading empty">
          <img src={NoContentImage} />
          <div className="desc">Hi，在左侧输入你的创意吧~</div>
        </div>
      ) : imageArray.length > 0 ? (
        <div className="content">
          {imageArray.length === '1' && <div className="single"></div>}
          {imageArray.length > '1' && <div className="multi"></div>}
        </div>
      ) : (
        <div className="empty">
          <img src={NoContentImage} />
          <div className="desc">Hi，在左侧输入你的创意吧~</div>
        </div>
      )}
    </div>
  );
};

export default ImageResultCard;
