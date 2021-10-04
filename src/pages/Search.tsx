import React from 'react';

import { Navigation } from '../components/Navigation';

interface Props {
    friends: boolean;
}
export const Search: React.FC<Props> = (props) => {
    return (
        <div className="search">
            <h2>This is a {props.friends ? 'friends' : 'user search'} page</h2>
            <Navigation search={!props.friends} friends={props.friends} />
        </div>
    );
};
