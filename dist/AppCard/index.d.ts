import React from 'react';
import './index.less';
interface Props {
    name: string;
    avatarUrl: string;
    desc?: string;
    onClick: any;
    user?: string;
    userAvatarUrl?: string;
    tags: string[];
    starNum?: number;
    type?: string;
    focus?: string;
}
declare const AppCard: ({ tags, name, avatarUrl, desc, user, userAvatarUrl, onClick, starNum, type, focus, }: Props) => React.JSX.Element;
export default AppCard;
