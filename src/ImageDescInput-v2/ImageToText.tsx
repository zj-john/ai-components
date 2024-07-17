import {
  DeleteOutlined,
  InboxOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import {
  Button,
  Space,
  Tabs,
  TabsProps,
  Tooltip,
  Upload,
  UploadProps,
  message,
} from 'antd';
import React, { useState } from 'react';

const { Dragger } = Upload;
interface ImageToTextProps {
  generateService: any;
  uploadService: any;
}

const ImageToText = ({ generateService, uploadService }: ImageToTextProps) => {
  // init generating done
  const [status, setStatus] = useState('init');

  const uploadProps: UploadProps = {
    name: 'file',
    multiple: false,
    onChange: async (info) => {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        // 增加解析逻辑
        setStatus('generating');
        const res = await generateService?.();
        setStatus('done');
        // 处理返回的文案
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    beforeUpload: async (file) => {
      console.log(file);
      // 上传逻辑
      await uploadService?.(file);
      return false;
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068',
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '方案1',
      children: (
        <div content={'Content of Tab Pane 1'}>Content of Tab Pane 1</div>
      ),
    },
    {
      key: '2',
      label: '方案2',
      children: (
        <div content={'Content of Tab Pane 2'}>Content of Tab Pane 2</div>
      ),
    },
    {
      key: '3',
      label: '方案3',
      children: (
        <div content={'Content of Tab Pane 3'}>Content of Tab Pane 3</div>
      ),
    },
  ];
  return (
    <div className="image-to-text-container">
      {(status === 'init' || status === 'generating') && (
        <div className="init">
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或拖拽文件到此处上传</p>
            <p className="ant-upload-hint">
              只能上传jpeg，png，gif，webp，最大不超过 5M
            </p>
          </Dragger>
        </div>
      )}

      {status === 'done' && (
        <div className="image-to-text-content">
          <div className="generate">
            <div className="image">
              <img
                src="https://img.meituan.net/aigcimage/45cff28fae76126efd61c2dc2fa88e2270308.jpg"
                alt=""
              />
              <div className="operation">
                <Space>
                  <Tooltip title="删除">
                    <Button shape="circle" icon={<DeleteOutlined />} />
                  </Tooltip>
                  <Tooltip title="重新生成">
                    <Button shape="circle" icon={<ReloadOutlined />} />
                  </Tooltip>
                </Space>
              </div>
            </div>
            <div className="tab">
              <Tabs defaultActiveKey="1" items={items} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ImageToText;
