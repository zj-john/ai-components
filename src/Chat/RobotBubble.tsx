import {
  CopyOutlined,
  DislikeOutlined,
  LikeOutlined,
  ShareAltOutlined,
  SyncOutlined,
} from '@ant-design/icons';
import { Bubble } from '@chatui/core';
import { Space, Tooltip } from 'antd';
import React from 'react';

const RobotBubble = (content: any) => {
  const { text } = content;
  console.log(content);
  return (
    <div className="robot-msg">
      <Bubble>
        <div className="content">{text}</div>
        <div className="extra">
          <div className="refresh">
            <Space size={6}>
              <SyncOutlined style={{ fontSize: '16px' }} />
              重新生成
            </Space>
          </div>
          <div className="action">
            <Space size={16}>
              <Tooltip title="复制">
                <CopyOutlined style={{ fontSize: '16px' }} />
              </Tooltip>
              <Tooltip title="分享">
                <ShareAltOutlined style={{ fontSize: '16px' }} />
              </Tooltip>
              <Tooltip title="喜欢">
                {' '}
                <LikeOutlined style={{ fontSize: '16px' }} />
              </Tooltip>
              <Tooltip title="不喜欢">
                <DislikeOutlined style={{ fontSize: '16px' }} />
              </Tooltip>
            </Space>
          </div>
        </div>
      </Bubble>
    </div>
  );
};

export default RobotBubble;
