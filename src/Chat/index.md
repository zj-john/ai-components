# Chat

This is an example component.

```jsx
import { Chat } from 'ai-jimu';

export default () => {
  const props = {
    robotAvatarUrl: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg',
    userAvatarUrl:
      'https://s3plus.vip.sankuai.com/assistant-admin-app-avatar/IMG-9764-DALL%C2%B7E2024-01-0516.13.33-A3Diconforadocumentassistantapp%2Cfeaturingastylizedpaperclipcharacterwearingglasses%2Csittingontopofastackofdocuments.Thepapercli.png',
    welcome: [
      {
        type: 'text',
        content: {
          text: `欢迎使用述职小助手，请输入述职文档的草稿，我来帮助完善。

您输入的内容该应用的创建者、FRIDAY 平台乃至微软和 OpenAI 都可见，因此请尽量避免敏感数据的上传或者在数据脱敏后使用。`,
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
