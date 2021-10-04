import React from 'react';

import { Navigation } from '../components/Navigation';
import { UserHeader } from '../components/UserHeader';
import { UserCard } from '../components/UserCard';

interface Props {
    friends: boolean;
}
export const Search: React.FC<Props> = (props) => {
    return (
        <div className="search">
            <UserHeader />
            {props.friends && <h2 className="search__header">Friends list</h2>}
            <input
                className="search__input"
                type="text"
                placeholder={props.friends ? 'Search friends' : 'Search users'}
            />
            <div
                className={
                    props.friends
                        ? 'search__container search__container--friends'
                        : 'search__container'
                }
            >
                <UserCard id={1} name="Pepe" avatar={1} />
                <UserCard id={2} name="Fineasz" avatar={1} />
                <UserCard id={3} name="Ferb" avatar={1} />
            </div>
            <Navigation search={!props.friends} friends={props.friends} />
        </div>
    );
};
