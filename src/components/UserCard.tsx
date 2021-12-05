import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { avatarList } from '../avatarList';
import { UserState } from '../UserDataContext';

interface Props {
    id: string;
}
export const UserCard: React.FC<Props> = (props) => {
    const history = useHistory();
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

    const openDms = () => {
        history.push('/chat');
    };

    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div className="userCard" onClick={() => openDms()}>
            <img
                src={avatarList[user.avatar]}
                alt={user.name}
                className="userCard__avatar"
            />
            <div className="userCard__name">{user.name}</div>
        </div>
    );
};
