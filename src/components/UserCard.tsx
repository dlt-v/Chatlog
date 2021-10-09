import React, { useEffect, useState } from 'react';
import { avatarList } from '../avatarList';
import { UserState } from '../UserDataContext';

interface Props {
    id: number;
}
export const UserCard: React.FC<Props> = (props) => {
    const [user, setUser] = useState<UserState>({
        id: props.id,
        name: '',
        avatar: -1,
    });

    const fetchUser = async () => {
        const result = await fetch(
            `http://localhost:3001/users/${props.id}`
        ).then((response) => response.json());
        setUser({
            id: props.id,
            name: result.name,
            avatar: result.avatar,
        });
    };

    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div className="userCard">
            <img
                src={avatarList[user.avatar]}
                alt={user.name}
                className="userCard__avatar"
            />
            <div className="userCard__name">{user.name}</div>
        </div>
    );
};
