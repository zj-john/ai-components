import { Result } from 'antd';
import React from 'react';
import './index.less';

interface ImageResultCardProps {
  content: any;
}

const NoContentImage = 'https://dummyimage.com/180x180/ff0/000';

const ImageResultCard = ({ content }: ImageResultCardProps) => {
  return content ? (
    <div>1</div>
  ) : (
    <div className="component-image-result-card">
      <Result
        icon={<img src={NoContentImage} />}
        title="Hi，在左侧输入你的创意吧~"
      />
    </div>
  );
};

export default ImageResultCard;
