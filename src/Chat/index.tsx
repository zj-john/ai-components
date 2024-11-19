import '@chatui/core/es/styles/index.less';
// 引入组件
import Chat, { Bubble, useMessages } from '@chatui/core';
// 引入样式
import '@chatui/core/dist/index.css';
import { forwardRef, useImperativeHandle } from 'react';
import Composer from './Composer';
import RobotBubble from './RobotBubble';
import './index.less';

interface CustomChatProps {
  title?: string;
  welcome?: any[];
  robotAvatarUrl: string;
  userAvatarUrl: string;
  sendMsg: any;
  createChat?: any;
  onCopy?: any;
  onShare?: any;
  onLike?: any;
  onDislike?: any;
  onRefresh?: any;
  generateImg?: any;
  showComposer?: boolean;
}

const CustomChat = forwardRef((props: CustomChatProps, ref) => {
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
  const {
    title,
    welcome,
    robotAvatarUrl,
    userAvatarUrl = '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg',
    sendMsg,
    createChat,
    onCopy,
    onShare,
    onLike,
    onDislike,
    onRefresh,
    generateImg,
    showComposer,
  } = props;
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
  const { messages, appendMsg, setTyping, resetList } =
    useMessages(initialMessages);

  const handleSend = async (type: string, val: any, modelConfig?: any) => {
    // const format = '内容请以Markdown格式返回';
    const format = '';
    // 目前只支持纯文本
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        ...user,
        hasTime: false,
        position: 'right',
      });
      setTyping(true);

      try {
        const res = await sendMsg({
          type,
          val: val + format,
          modelConfig,
        });
        if (!res) {
          setTyping(false);
          return;
        }
        appendMsg({
          type: 'text',
          content: { text: res },
          ...robot,
          hasTime: false,
          position: 'left',
        });
      } catch (error) {
        setTyping(false);
      }
    }
  };

  useImperativeHandle(ref, () => {
    return {
      handleSend,
      resetList,
      appendMsg,
    };
  });

  const renderMessageContent = (msg: any) => {
    const { content, user } = msg;
    return user.avatar === userAvatarUrl ? (
      <div className="user-msg">
        <Bubble>{content.text}</Bubble>
      </div>
    ) : (
      <RobotBubble
        {...content}
        onCopy={onCopy}
        onShare={onShare}
        onLike={onLike}
        onDislike={onDislike}
        onRefresh={onRefresh}
        generateImg={generateImg}
      />
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
          Composer={() =>
            showComposer ? Composer(handleSend, createChat) : <></>
          }
        />
      ) : (
        <Chat
          renderNavbar={() => {
            return null;
          }}
          messages={messages}
          renderMessageContent={renderMessageContent}
          onSend={handleSend}
          Composer={() =>
            showComposer ? Composer(handleSend, createChat) : <></>
          }
        />
      )}
    </div>
  );
});

export default CustomChat;
