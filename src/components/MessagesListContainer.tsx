import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../UserDataContext';
import { ChatBubble } from './ChatBubble';

interface Message {
    id: number;
    sender_id: number;
    date: string;
    content: string;
}

export const MessagesListContainer: React.FC = () => {
    const [userMessages, setUserMessages] = useState<Message[]>([]);
    const { user, openDm } = useContext(UserDataContext);

    useEffect(() => {
        fetch(
            `http://localhost:3001/chats?participants=${user.id},${openDm.id}`
        )
            .then((response) => response.json())
            .then((response) => setUserMessages(response[0].messages));
    }, []);

    return (
        <div className="messagesContainer">
            {userMessages.map((message) => (
                <ChatBubble
                    key={message.id}
                    recipient={user.id}
                    sender_id={message.sender_id}
                    date={message.date}
                    content={message.content}
                />
            ))}
        </div>
    );
};
