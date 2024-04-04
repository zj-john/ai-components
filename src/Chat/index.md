# Chat

This is an example component.

```jsx
import { Chat } from 'ai-jimu';

export default () => {
  const props = {
    robotAvatarUrl: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg',
    userAvatarUrl:
      'https://shuchun.oss-accelerate.aliyuncs.com/web_dist/sucai/avatar/%E5%A4%B4%E5%83%8F%20%E7%BA%A2%E8%89%B2%E6%AF%9B%E8%A1%A3%E7%94%B7%E5%AD%A9.png',
    welcome: [
      {
        type: 'text',
        content: {
          text: `欢迎使用小助手`,
        },
      },
    ],
    sendMsg: async () => {
      return '2000';
    },
  };
  return <Chat {...props} />;
};
```
