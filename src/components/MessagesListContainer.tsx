import React, { useContext, useEffect, useState } from 'react';
import { UserDataContext } from '../UserDataContext';
import { ChatBubble } from './ChatBubble';
import { useHistory } from 'react-router';

interface Message {
    id: number;
    sender_id: string;
    date: string;
    content: string;
}

export const MessagesListContainer: React.FC = () => {
    const [userMessages, setUserMessages] = useState<Message[]>([]);
    const { user, openDm } = useContext(UserDataContext);
    const dummy: React.RefObject<HTMLInputElement> = React.createRef();
    let history = useHistory();

    useEffect(() => {
        if (openDm.avatar === -1) history.push('/');
        else {
            fetch(
                `http://localhost:3001/chats?participants=${user.id},${openDm.id}`
            )
                .then((response) => response.json())
                .then((response) => {
                    setUserMessages(response[0].messages);
                });
        }
    }, []);

    setTimeout(() => {
        dummy.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // todo: improve scrolling

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
            <div ref={dummy}></div>
        </div>
    );
};
