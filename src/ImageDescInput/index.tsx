import {
  AudioOutlined,
  LoadingOutlined,
  PictureOutlined,
  ReadOutlined,
  RobotOutlined,
} from '@ant-design/icons';
import { Button, FormInstance, Input, Modal, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
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
  value: string;
  onChange: any;
  isVoice?: boolean;
  form?: FormInstance;
}

const ImageDescInput = ({
  aiPrompt = true,
  imageToPrompt = true,
  aiGenerateService,
  uploadService,
  generateService,
  value = '',
  onChange,
  isVoice = false,
  form,
}: ImageDescInputProps) => {
  const [prompt, setPrompt] = useState(value);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [promptModalVisible, setPromptModalVisible] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    return () => {
      SpeechRecognition.stopListening(); // 组件卸载时停止监听
    };
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&lsquo;t support speech recognition.</span>;
  }

  useEffect(() => {
    console.log('listening', listening, transcript);
    if (!listening && transcript) {
      // const newValue = prompt + transcript;
      // setPrompt(newValue);
      // form?.setFieldValue('desc', newValue);
      setPrompt((prev) => {
        const newValue = prev + transcript;
        setTimeout(() => {
          form?.setFieldValue('desc', newValue);
        }, 0);
        return newValue;
      });
      resetTranscript();
    }
  }, [listening, transcript, resetTranscript]);

  return (
    <div className="component-image-desc-input">
      <div className="textarea-container">
        <div className="textarea">
          <TextArea
            rows={4}
            placeholder="在这里输入图片描述"
            value={prompt}
            onChange={(e) => {
              setPrompt(e.target.value);
              onChange?.(e.target.value);
            }}
          />
        </div>
        <div className="operation">
          <Space size={0}>
            {isVoice && (
              <div className="cursor-pointer">
                {!listening ? (
                  <div onClick={SpeechRecognition.startListening}>
                    <AudioOutlined />
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      SpeechRecognition.stopListening();
                      resetTranscript();
                    }}
                  >
                    <LoadingOutlined />
                  </div>
                )}
              </div>
            )}
            {aiPrompt && (
              <Button
                icon={<RobotOutlined />}
                type="link"
                size="small"
                onClick={async () => {
                  const res = await aiGenerateService?.(prompt);
                  setPrompt(res);
                  onChange?.(res);
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
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p> */}
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
            const newPrompt = prompt
              ? prompt + ',' + tags.join(',')
              : tags.join(',');
            onChange?.(newPrompt);
            setPromptModalVisible(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default ImageDescInput;
