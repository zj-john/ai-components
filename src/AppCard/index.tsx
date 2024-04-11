import { StarOutlined } from '@ant-design/icons';
import { Avatar, Button, Tag } from 'antd';
import React, { useState } from 'react';
import { globalConfig } from '../common/global';
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
  theme?: any;
  bgColor?: string;
}

const AppCard = ({
  tags = [],
  name,
  avatarUrl,
  desc,
  user = 'AI创作者',
  userAvatarUrl = 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  onClick,
  starNum,
  type,
  focus,
  theme = globalConfig.theme,
  bgColor,
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
      className="component-app-card"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ '--PrimaryColorTrans': bgColor || theme.primaryColorTrans }}
    >
      <div className="app-body">
        <div className="header">
          {focus && (
            <div className="focus">
              <span>{focus}</span>
            </div>
          )}
          <div className="basic">
            <Avatar src={avatarUrl} size={32} />
            <div className="title">{name}</div>
          </div>
          {type && (
            <div className="type">
              <Tag>{type}</Tag>
            </div>
          )}
        </div>
        <div className="content">
          {tags.length > 0 && (
            <div className="tags">
              {tags.map((tag) => {
                return (
                  <Tag color="processing" key={tag}>
                    {tag}
                  </Tag>
                );
              })}
            </div>
          )}
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
            <span className="user-name">
              创建者：
              <Avatar src={userAvatarUrl} size={20} />
              <span className="name">{user}</span>
            </span>
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

export default AppCard;
