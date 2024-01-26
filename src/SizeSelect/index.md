# SizeSelect

This is an example component.

```jsx
import { SizeSelectGroup } from 'jimu';

export default () => {
  const data = [
    {
      ratio: '1:1',
      name: '方图',
    },
    {
      ratio: '3:4',
      name: '社交媒体',
    },
    {
      ratio: '4:3',
      name: '文章配图',
    },
    {
      ratio: '9:16',
      name: '海报',
    },
    {
      ratio: '16:9',
      name: '视频',
    },
    {
      ratio: 'custom',
      name: '自定义',
    },
  ];
  return <SizeSelectGroup options={data} />;
};
```
