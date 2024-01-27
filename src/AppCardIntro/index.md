# AppCardIntro

```jsx
import { AppCardIntro } from 'ai-jimu';

export default () => {
  const props = {
    name: '测试应用',
    avatarUrl:
      'https://s3plus.vip.sankuai.com/assistant-admin-app-avatar/IMG-9764-DALL%C2%B7E2024-01-0516.13.33-A3Diconforadocumentassistantapp%2Cfeaturingastylizedpaperclipcharacterwearingglasses%2Csittingontopofastackofdocuments.Thepapercli.png',
    desc: '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
    onClick: () => {
      console.log(1);
    },
    type: '文生文',
    starNum: 120,
    focus: 'New',
    headerBgColor: '#CAEFF8',
  };
  return (
    <div style={{ width: '400px', backgroundColor: 'gray', margin: '10px' }}>
      <AppCardIntro {...props} />
    </div>
  );
};
```
