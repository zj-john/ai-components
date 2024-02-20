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
import { MarkdownRender } from '..';

const RobotBubble = (
  content: any,
  onCopy?: any,
  onShare?: any,
  onLike?: any,
  onDislike?: any,
) => {
  const { text } = content;
  console.log(content);
  return (
    <div className="robot-msg">
      <Bubble>
        <div className="content">
          <MarkdownRender content={text.replace(/\\n/g, '\n')} />
        </div>
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
                <CopyOutlined
                  style={{ fontSize: '16px' }}
                  onClick={onCopy ? onCopy : () => {}}
                />
              </Tooltip>
              <Tooltip title="分享">
                <ShareAltOutlined
                  style={{ fontSize: '16px' }}
                  onClick={onShare ? onShare : () => {}}
                />
              </Tooltip>
              <Tooltip title="喜欢">
                {' '}
                <LikeOutlined
                  style={{ fontSize: '16px' }}
                  onClick={onLike ? onLike : () => {}}
                />
              </Tooltip>
              <Tooltip title="不喜欢">
                <DislikeOutlined
                  style={{ fontSize: '16px' }}
                  onClick={onDislike ? onDislike : () => {}}
                />
              </Tooltip>
            </Space>
          </div>
        </div>
      </Bubble>
    </div>
  );
};

export default RobotBubble;
