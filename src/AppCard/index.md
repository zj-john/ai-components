# AppCard

```jsx
import { AppCard } from 'ai-jimu';

export default () => {
  const props = {
    name: '测试应用',
    avatarUrl:
      'https://shuchun.oss-accelerate.aliyuncs.com/web_dist/sucai/avatar/%E5%A4%B4%E5%83%8F%20%E7%BA%A2%E8%89%B2%E6%AF%9B%E8%A1%A3%E7%94%B7%E5%AD%A9.png',
    desc: '这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述这里是描述',
    onClick: () => {
      console.log(1);
    },
    user: '一个机器人',
    userAvatarUrl:
      'https://shuchun.oss-accelerate.aliyuncs.com/web_dist/sucai/avatar/%E5%A4%B4%E5%83%8F%20%E4%B8%AD%E9%95%BF%E5%8F%91%E5%A5%B3%E5%AD%A9.png',
    tags: ['美妆', '科技', '大模型', '创意'],
    type: '文生文',
    starNum: 120,
    focus: 'New',
  };
  return (
    <div style={{ width: '400px', backgroundColor: 'gray', margin: '10px' }}>
      <AppCard {...props} />
    </div>
  );
};
```
