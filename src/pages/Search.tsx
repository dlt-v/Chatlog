import React, { useEffect, useContext, useState } from 'react';
import { UserDataContext } from '../UserDataContext';

import { Navigation } from '../components/Navigation';
import { UserHeader } from '../components/UserHeader';
import { UserCard } from '../components/UserCard';

// waiting mechanism for user input
// only search for non-friend users if the input is not empty
// show up friend users immidately but also have an option to filter the users by name

interface Props {
    friends: boolean;
}
export const Search: React.FC<Props> = (props) => {
    const { user } = useContext(UserDataContext);
    const [friendList, setFriendList] = useState<string[]>([]);
    const [userList, setUserList] = useState<any[]>([]);
    const [input, setInput] = useState<string>('');

    const fetchFriends = async () => {
        if (props.friends) {
            const result = await fetch(
                `http://localhost:3001/users/${user.id}`
            ).then((response) => response.json());
            setFriendList(result.friends);
        }
    };

    const fetchUsers = async () => {};

    useEffect(() => {
        if (props.friends) fetchFriends();
    }, []);

    return (
        <div className="search">
            <UserHeader />
            {props.friends && <h2 className="search__header">Friends list</h2>}
            <input
                className="search__input"
                type="search"
                placeholder={props.friends ? 'Search friends' : 'Search users'}
            />
            <div
                className={
                    props.friends
                        ? 'search__container search__container--friends'
                        : 'search__container'
                }
            >
                {friendList.map((friend) => (
                    <UserCard id={friend} key={friend} />
                ))}
            </div>
            <Navigation search={!props.friends} friends={props.friends} />
        </div>
    );
};
