# SceneSelect

This is an example component.

```jsx
import { SceneSelectGroup } from 'jimu';

export default () => {
  const data = [
    {
      img: 'https://img.meituan.net/consoleqa/53c7bb836409c2d8c655cc69cc4768f5869527.png',
      name: '重庆火锅',
    },
  ];
  return <SceneSelectGroup options={data} />;
};
```
