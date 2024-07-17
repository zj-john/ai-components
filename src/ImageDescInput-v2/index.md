# ImageDescInput

This is an example component.

```jsx
import { ImageDescInput } from 'ai-jimu';

export default () => (
  <ImageDescInput
    value={''}
    onChange={(value) => {
      console.log(value);
    }}
    aiPrompt={false}
    imageToPrompt={false}
  />
);
```
