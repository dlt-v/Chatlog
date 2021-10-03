import React, { useContext } from 'react';
import { Input } from '../components/Input';
import { MessagesListContainer } from '../components/MessagesListContainer';
import { UserHeader } from '../components/UserHeader';

export const Chat: React.FC = () => {

    return (
        <div className="chat">
            <UserHeader />
            <MessagesListContainer />
            <Input />
        </div>
    );
};
