import React from 'react';
import './index.less';
interface SceneSelectProps {
    img: string;
    name: string;
}
interface SceneSelectGroupProps {
    options: any;
    hGutter?: number;
    vGutter?: number;
    ColInRow?: number;
}
declare const SceneSelect: ({ img, name }: SceneSelectProps) => React.JSX.Element;
declare const SceneSelectGroup: ({ options, vGutter, hGutter, ColInRow, }: SceneSelectGroupProps) => React.JSX.Element;
export { SceneSelect, SceneSelectGroup };
