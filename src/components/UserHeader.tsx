import React, { useState, useContext } from 'react';
import { UserDataContext } from '../UserDataContext';
import { Dropdown } from './Dropdown';
import { avatarList } from '../avatarList';
import { useHistory } from 'react-router';

interface Props {
    isChat?: boolean;
}

export const UserHeader: React.FC<Props> = (props) => {
    let history = useHistory();
    const [close, setClose] = useState(false);
    const { user, openDm } = useContext(UserDataContext);

    const backIcon = () => {
        const result = props.isChat ? (
            <span
                onClick={() => history.push('/')}
                className="icon-back"
            ></span>
        ) : (
            <div></div>
        );
        return result;
    };

    return (
        <div>
            <div className="main__userHeader">
                {backIcon()}
                <img src={props.isChat ? avatarList[openDm.avatar] :avatarList[user.avatar]}alt="avatar" />
                <span className="main__userHeader__userName">{props.isChat ? openDm.name : user.name}</span>
                <span
                    onClick={() => setClose(!close)}
                    className={close ? 'icon-close' : 'icon-options'}
                ></span>
                {close && <Dropdown />}
            </div>
        </div>
    );
};
