import React from 'react';
import { avatarList } from '../avatarList';

interface Props {
    id: number;
    avatar: number;
    name: string;
    time: string | undefined;
    message: string;
    unread: number;
}

export const HistoryMessage: React.FC<Props> = (props) => {
    return (
        <div className="historyMessage">
            <img
                src={avatarList[props.avatar]}
                alt=""
                className="historyMessage__avatar"
            />
            <div className="historyMessage__nickname">{props.name}</div>
            <div className="historyMessage__message">{props.message}</div>
            {props.unread !== 0 ? (
                <div className="historyMessage__unread">{props.unread}</div>
            ) : (
                <div></div>
            )}
            <div className="historyMessage__time">{props.time}</div>
        </div>
    );
};
