import { StarOutlined } from '@ant-design/icons';
import { Avatar, Button, Tag } from 'antd';
import React, { useState } from 'react';
import './index.less';

interface Props {
  name: string;
  avatarUrl: string;
  desc?: string;
  onClick: any;
  user?: string;
  userAvatarUrl?: string;
  // 标签
  tags: string[];
  starNum?: number;
  type?: string;
  focus?: string;
  headerBgColor?: string;
}

const AppCardIntro = ({
  name,
  avatarUrl,
  desc,
  onClick,
  starNum,
  type,
  focus,
  headerBgColor = '#D1E3FF',
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="component-app-card-intro"
      onClick={onClick}
      style={{ '--HeaderBgColor': headerBgColor }}
    >
      <div
        className="app-body"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {focus && (
          <div className="focus">
            <span>{focus}</span>
          </div>
        )}
        <div className="header">
          <Avatar src={avatarUrl} size={80} />
          <div className="title">{name}</div>
        </div>
        <div className="content">
          <div className="desc">{desc}</div>
        </div>
      </div>
      {isHovered ? (
        <div className="btn-footer">
          <Button type="primary" onClick={onClick}>
            立即体验
          </Button>
        </div>
      ) : (
        <div className="app-footer">
          <div className="user">
            {type && (
              <div className="type">
                <Tag>{type}</Tag>
              </div>
            )}
          </div>
          <div className="summary">
            {starNum && (
              <div className="star">
                <StarOutlined /> {Number(starNum)}
              </div>
            )}
          </div>
        </div>
      )}
      {/* <Card hoverable className="card" onClick={onClick}>
        <Card.Meta
          avatar={<Avatar src={avatarUrl} size={50} />}
          title={name}
          description={
            <Typography.Paragraph ellipsis={{ rows: 3 }}>
              {desc}
            </Typography.Paragraph>
          }
        />
      </Card> */}
    </div>
  );
};

export default AppCardIntro;
