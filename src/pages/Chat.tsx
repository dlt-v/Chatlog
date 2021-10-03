import React, { useContext } from 'react';
import { Input } from '../components/Input';
import { UserDataContext } from '../UserDataContext';

export const Chat: React.FC = () => {
    const { openDm, setOpenDm } = useContext(UserDataContext);
    return (
        <div className="chat">
            <Input />
        </div>
    );
};
