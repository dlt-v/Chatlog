import React, { useState, useContext } from 'react';
import { UserDataContext } from '../UserDataContext';
import { Dropdown } from './Dropdown';
import { avatarList } from '../avatarList';

export const UserHeader: React.FC = () => {
    const [close, setClose] = useState(false);
    const { user } = useContext(UserDataContext);

    return (
        <div>
            <div className="main__userHeader">
                <img src={avatarList[user.avatar]} alt="avatar" />
                <span className="main__userHeader__userName">{user.name}</span>
                <span
                    onClick={() => setClose(!close)}
                    className={close ? 'icon-close' : 'icon-options'}
                ></span>
                {close && <Dropdown />}
            </div>
        </div>
    );
};
