import React from 'react';
import './index.less';
interface SizeSelectProps {
    ratio: string;
    name: string;
}
interface SizeSelectGroupProps {
    options: any;
    hGutter?: number;
    vGutter?: number;
    ColInRow?: number;
}
declare const SizeSelect: ({ ratio, name }: SizeSelectProps) => React.JSX.Element;
declare const SizeSelectGroup: ({ options, vGutter, hGutter, ColInRow, }: SizeSelectGroupProps) => React.JSX.Element;
export { SizeSelect, SizeSelectGroup };
