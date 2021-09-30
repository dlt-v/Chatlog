import React from 'react';
import { avatarList } from '../avatarList';

interface Props {
    id: number;
    avatar: number;
    name: string;
    time: string;
    message: string;
    unread: number;
}

const parseTime = (time: string) => {
    const messageTime = new Date(time);
    const currentTime = new Date();

    if (messageTime.getDate() !== currentTime.getDate()) {
        return `${messageTime.getMonth() + 1}.${messageTime.getDate()}`;
    } else {
        return `${messageTime.getHours()}:${messageTime.getMinutes()}`;
    }
};

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
            <div className="historyMessage__time">{parseTime(props.time)}</div>
        </div>
    );
};
