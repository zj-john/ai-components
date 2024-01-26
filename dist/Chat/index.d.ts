import '@chatui/core/es/styles/index.less';
import React from 'react';
import '@chatui/core/dist/index.css';
import './index.less';
interface CustomChatProps {
    title?: string;
    welcome?: any[];
    robotAvatarUrl: string;
    userAvatarUrl: string;
    sendMsg: any;
}
declare const CustomChat: ({ title, welcome, robotAvatarUrl, userAvatarUrl, sendMsg, }: CustomChatProps) => React.JSX.Element;
export default CustomChat;
