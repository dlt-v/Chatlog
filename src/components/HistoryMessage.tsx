import React from 'react';

import av0 from '../styles/img/av-0.svg';
import av1 from '../styles/img/av-1.svg';
import av2 from '../styles/img/av-2.svg';
import av3 from '../styles/img/av-3.svg';

const avatars = [av0, av1, av2, av3];

interface Props {
    id: number;
    avatar?: string;
    name: string;
    time: string;
    message: string;
    unread: number;
}

export const HistoryMessage: React.FC<Props> = (props) => {
    return (
        <div className="historyMessage">
            <img src={av3} alt="" className="historyMessage__avatar" />
            <div className="historyMessage__nickname">{props.name}</div>
            <div className="historyMessage__message">{props.message}</div>
            {props.unread !== 0 ? <div className="historyMessage__unread">{props.unread}</div> : <div></div>}
            <div className="historyMessage__time">{props.time}</div>
        </div>
    );
};
