import '@chatui/core/es/styles/index.less';
import React from 'react';
// 引入组件
import Chat, { Bubble, useMessages } from '@chatui/core';
// 引入样式
import '@chatui/core/dist/index.css';
import Composer from './Composer';
import RobotBubble from './RobotBubble';
import './index.less';

interface CustomChatProps {
  title?: string;
  welcome?: any[];
  robotAvatarUrl: string;
  userAvatarUrl: string;
  sendMsg: any;
}

const CustomChat = ({
  title,
  welcome,
  robotAvatarUrl,
  userAvatarUrl,
  sendMsg,
}: CustomChatProps) => {
  // const robotMessageContent = (msg) => {
  //   const { content } = msg;
  //   return (
  //     <div className="robot-message">
  //       <Bubble content={content.text} />
  //     </div>
  //   );
  // };
  // const userMessageContent = (msg) => {
  //   const { content } = msg;
  //   return (
  //     <div className="user-message">
  //       <Bubble content={content.text} />
  //     </div>
  //   );
  // };
  const robot = {
    user: {
      avatar: robotAvatarUrl,
    },
  };
  const user = {
    user: {
      avatar: userAvatarUrl,
    },
  };
  const initialMessages = welcome?.map((item) => {
    return {
      ...item,
      ...robot,
      hasTime: false,
    };
  });
  const { messages, appendMsg, setTyping } = useMessages(initialMessages);

  const handleSend = async (type: string, val: any) => {
    const format = '内容请以Markdown格式返回';
    // 目前只支持纯文本
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        ...user,
        hasTime: false,
        position: 'left',
      });

      setTyping(true);

      const res = await sendMsg({
        type,
        val: val + format,
      });
      appendMsg({
        type: 'text',
        content: { text: res },
        ...robot,
        hasTime: false,
        position: 'left',
      });
    }
  };

  const renderMessageContent = (msg: any) => {
    const { content, user } = msg;
    return user.avatar === userAvatarUrl ? (
      <div className="user-msg">
        <Bubble>{content.text}</Bubble>
      </div>
    ) : (
      <RobotBubble {...content} />
    );
  };

  return (
    <div className="chat-container">
      {title ? (
        <Chat
          navbar={{ title }}
          messages={messages}
          renderMessageContent={renderMessageContent}
          onSend={handleSend}
          Composer={() => Composer(handleSend)}
        />
      ) : (
        <Chat
          renderNavbar={() => {
            return null;
          }}
          messages={messages}
          renderMessageContent={renderMessageContent}
          onSend={handleSend}
          Composer={() => Composer(handleSend)}
        />
      )}
    </div>
  );
};

export default CustomChat;
