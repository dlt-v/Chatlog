import React from 'react';
import { avatarList } from '../avatarList';

interface Props {
    id: number;
    name: string;
    avatar: number;
}
export const UserCard: React.FC<Props> = (props) => {
    return (
        <div className="userCard">
            <img
                src={avatarList[props.avatar]}
                alt={props.name}
                className="userCard__avatar"
            />
            <div className="userCard__name">{props.name}</div>
        </div>
    );
};
