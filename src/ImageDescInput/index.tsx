import {
  PictureOutlined,
  ReadOutlined,
  RobotOutlined,
} from '@ant-design/icons';
import { Button, Input, Modal, Space } from 'antd';
import React, { useState } from 'react';
import ImageToText from './ImageToText';
import Prompt from './Prompt';
import './index.less';

const { TextArea } = Input;
interface ImageDescInputProps {
  aiPrompt: boolean;
  imageToPrompt: boolean;
  aiGenerateService: any;
  uploadService: any;
  generateService: any;
}

const ImageDescInput = ({
  aiPrompt = true,
  imageToPrompt = true,
  aiGenerateService,
  uploadService,
  generateService,
}: ImageDescInputProps) => {
  const [prompt, setPrompt] = useState('');
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [promptModalVisible, setPromptModalVisible] = useState(false);

  return (
    <div className="component-image-desc-input">
      <div className="textarea-container">
        <div className="textarea">
          <TextArea
            rows={4}
            placeholder="在这里输入图片描述"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        <div className="operation">
          <Space size={0}>
            {aiPrompt && (
              <Button
                icon={<RobotOutlined />}
                type="link"
                size="small"
                onClick={async () => {
                  await aiGenerateService?.(setPrompt);
                }}
              >
                AI生成
              </Button>
            )}
            {imageToPrompt && (
              <Button
                icon={<PictureOutlined />}
                type="link"
                size="small"
                onClick={() => {
                  setImageModalVisible(true);
                }}
              >
                图转文
              </Button>
            )}
          </Space>
          <div>
            <Button
              icon={<ReadOutlined />}
              type="link"
              size="small"
              onClick={() => {
                setPromptModalVisible(true);
              }}
            >
              提示词助手
            </Button>
          </div>
        </div>
      </div>
      <Modal
        className="component-image-desc-input-image-modal"
        title="图片生成关键词"
        open={imageModalVisible}
        maskClosable={false}
        footer={false}
        onCancel={() => {
          setImageModalVisible(false);
        }}
      >
        <ImageToText
          uploadService={uploadService}
          generateService={generateService}
        />
      </Modal>
      <Modal
        className="component-image-desc-input-prompt-modal"
        title="提示词助手"
        open={promptModalVisible}
        maskClosable={false}
        footer={false}
        destroyOnClose
        width="800px"
        onCancel={() => {
          setPromptModalVisible(false);
        }}
      >
        <Prompt
          onOk={(tags: any) => {
            setPrompt((pre) => {
              return pre + ',' + tags.join(',');
            });
            setPromptModalVisible(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default ImageDescInput;
