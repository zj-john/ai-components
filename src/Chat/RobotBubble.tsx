import {
  CopyOutlined,
  DislikeOutlined,
  FileImageOutlined,
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
  onRefresh?: any,
  generateImg?: any,
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
            {onRefresh && (
              <Space size={6}>
                <SyncOutlined
                  style={{ fontSize: '16px' }}
                  onClick={onRefresh}
                />
                重新生成
              </Space>
            )}
            {generateImg && (
              <Space size={6}>
                <FileImageOutlined
                  style={{ fontSize: '16px' }}
                  onClick={generateImg}
                />
                生成配图
              </Space>
            )}
          </div>
          <div className="action">
            <Space size={16}>
              {onCopy && (
                <Tooltip title="复制">
                  <CopyOutlined style={{ fontSize: '16px' }} onClick={onCopy} />
                </Tooltip>
              )}
              {onShare && (
                <Tooltip title="分享">
                  <ShareAltOutlined
                    style={{ fontSize: '16px' }}
                    onClick={onShare}
                  />
                </Tooltip>
              )}
              {onLike && (
                <Tooltip title="喜欢">
                  {' '}
                  <LikeOutlined style={{ fontSize: '16px' }} onClick={onLike} />
                </Tooltip>
              )}
              {onDislike && (
                <Tooltip title="不喜欢">
                  <DislikeOutlined
                    style={{ fontSize: '16px' }}
                    onClick={onDislike}
                  />
                </Tooltip>
              )}
            </Space>
          </div>
        </div>
      </Bubble>
    </div>
  );
};

export default RobotBubble;
