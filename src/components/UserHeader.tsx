import React, { useState, useContext } from 'react';
import { UserDataContext } from '../UserDataContext';
import { Dropdown } from './Dropdown';

import av0 from '../styles/img/av-0.svg';
import av1 from '../styles/img/av-1.svg';
import av2 from '../styles/img/av-2.svg';
import av3 from '../styles/img/av-3.svg';

const avatars = [av0, av1, av2, av3];
console.log(avatars);

export const UserHeader: React.FC = () => {
    const [close, setClose] = useState(false);
    const { user } = useContext(UserDataContext);

    return (
        <div>
            <div className="main__userHeader">
                <img src={avatars[user.avatar]} alt="avatar" />
                <span className="main__userHeader__userName">{user.name}</span>
                <span
                    onClick={() => setClose(!close)}
                    className={close ? 'icon-back' : 'icon-options'}
                ></span>
            </div>
            {close && <Dropdown />}
        </div>
    );
};
