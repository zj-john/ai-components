# AppCardIntro

```jsx
import { AppCardIntro } from 'ai-jimu';

export default () => {
  const props = {
    name: '测试应用',
    avatarUrl:
      'https://shuchun.oss-accelerate.aliyuncs.com/web_dist/sucai/avatar/%E5%A4%B4%E5%83%8F%20%E5%95%86%E5%8A%A1%E7%94%B7%E4%BA%BA.png',
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
