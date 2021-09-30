import React, { useState, useEffect, useContext } from 'react';
import { UserDataContext } from '../UserDataContext';
import { HistoryMessage } from './HistoryMessage';

interface MessageState {
    name: string;
    avatar: number;
    id: number;
    unread: number;
    message: string;
    time: string;
}

export const LastMessages: React.FC = () => {
    const [conversations, setConversations] = useState<MessageState[]>([]);
    const { user } = useContext(UserDataContext);

    // Find all conversations
    const fetchConversations = async () => {
        const result = await fetch(`http://localhost:3001/chats`)
            .then((response) => response.json())
            .then((response) => response);

        const userConversations = findUserConversations(result);
        parseUserConversations(userConversations);
    };

    // Get user conversations
    const findUserConversations = (chatlogs: MessageState[]) => {
        let userConversations: MessageState[] = [];

        chatlogs.filter((chat: any) => {
            if (chat.participants.includes(user.id)) {
                userConversations = [chat, ...userConversations];
            }
        });

        return userConversations;
    };

    // Create history array
    const parseUserConversations = (userChats: MessageState[]) => {
        let newConversations: MessageState[] = [];

        userChats.map(async (chat: any) => {
            const recipientId: number =
                chat.participants[0] === user.id
                    ? chat.participants[1]
                    : chat.participants[0];

            const recipient = await fetchOtherUser(recipientId);

            const last = {
                id: recipientId,
                avatar: recipient.avatar,
                name: recipient.name,
                message: chat.messages[chat.messages.length - 1].content,
                time: chat.messages[chat.messages.length - 1].date,
                unread: 0, // todo later
            };
            newConversations = [last, ...newConversations];

            setConversations(newConversations);
        });
    };

    // Get data about recipient
    const fetchOtherUser = (otherUserId: number) => {
        const result = fetch(`http://localhost:3001/users/${otherUserId}`)
            .then((response) => response.json())
            .then((response) => response);
        return result;
    };

    useEffect(() => {
        fetchConversations();
    }, []);

    return (
        <div className="lastMessages">
            {conversations.map((message) => (
                <HistoryMessage
                    avatar={message.avatar}
                    key={message.id}
                    id={message.id}
                    name={message.name}
                    time={message.time}
                    message={message.message}
                    unread={message.unread}
                />
            ))}
        </div>
    );
};
