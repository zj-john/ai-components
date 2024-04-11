# SceneSelect

This is an example component.

```jsx
import { SceneSelectGroup } from 'ai-jimu';

export default () => {
  const data = [
    {
      img: 'https://img.meituan.net/consoleqa/53c7bb836409c2d8c655cc69cc4768f5869527.png',
      name: '哈哈哈',
    },
  ];
  return <SceneSelectGroup options={data} />;
};
```

### 图片风格

```jsx
import { SceneSelectGroup, ImageStyleSelectGroupConfig } from 'ai-jimu';

export default () => {
  return <SceneSelectGroup options={ImageStyleSelectGroupConfig} />;
};
```
