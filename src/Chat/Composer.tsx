import { SendOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';
import 'regenerator-runtime';

const CustomizeComposer = (handleSend: any, createChat: any) => {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const {
    transcript,
    listening,
    // resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleSendMsg = useCallback(async () => {
    await handleSend('text', inputValue);
    setInputValue('');
  }, [handleSend, inputValue]);

  useEffect(() => {
    if (!listening && transcript) {
      setInputValue(transcript);
    }
  }, [listening, transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&lsquo;t support speech recognition.</span>;
  }

  return (
    <div className="composer">
      {/* <div className="new-chat" onClick={createChat ? createChat : () => {}}>
        <Tooltip title="创建新对话">
          <PlusCircleOutlined style={{ fontSize: '30px', color: '#707070' }} />
        </Tooltip>
      </div> */}
      <div className="input-container">
        <Input.TextArea
          value={inputValue}
          onPressEnter={(e) => {
            // e.preventDefault();
            e.stopPropagation();
          }}
          onChange={(e: { target: { value: any } }) => {
            setInputValue(e.target.value);
          }}
          autoSize={{ minRows: 2, maxRows: 6 }}
        ></Input.TextArea>
        {/* <div className="mx-2">
          {!listening ? (
            <div onClick={() => SpeechRecognition.startListening()}>
              <AudioOutlined />
            </div>
          ) : (
            <div onClick={SpeechRecognition.stopListening}>
              <LoadingOutlined />
            </div>
          )}
        </div> */}

        <Button
          shape="circle"
          size="large"
          icon={<SendOutlined rotate={-45} />}
          type="primary"
          onClick={handleSendMsg}
          disabled={!inputValue}
        ></Button>
      </div>
    </div>
  );
};

export default CustomizeComposer;
