import React, { useState, useEffect, useContext } from 'react';
import { UserDataContext } from '../UserDataContext';
import { HistoryMessage } from './HistoryMessage';
import { LastMessages, Message } from '../../types';

import { handleFindUserConversations } from '../firebase/utilities';

export interface LastRecipient {
    name: string;
    avatar: number;
    id: string;
    unread: number;
    message: string;
    time: number;
    key: string;
}

export const LastMessagesContainer: React.FC = () => {
    const [conversations, setConversations] = useState<LastRecipient[]>([]);
    const { user } = useContext(UserDataContext);

    const findRecipientDetails = (conversation: any) => {
        const recipientConversation: Message = conversation.find(
            (message: Message) => message.sender.id !== user.id
        );

        return recipientConversation;
    };

    const fetchConversations = async () => {
        const result: LastMessages[] = await handleFindUserConversations(
            `${user.id}`
        );

        let newConversations: LastRecipient[] = [];

        for (const conversation of result) {
            if (!conversation) return;
            if (!conversation.messages) return;

            const recipientConversation: Message = findRecipientDetails(
                conversation.messages
            );

            const newConversationObject: LastRecipient = {
                avatar: recipientConversation.sender.avatar,
                key: conversation.id,
                id: conversation.id,
                name: recipientConversation.sender.name,
                time: conversation.messages[0].date.seconds,
                message: conversation.messages[0]?.content,
                unread: 1,
            };

            newConversations.push(newConversationObject);
        }

        setConversations(newConversations);
    };

    useEffect(() => {
        fetchConversations();
    }, [user]);

    return (
        <div className="lastMessages">
            {conversations.map((message) => (
                <HistoryMessage
                    avatar={message.avatar}
                    key={message.key}
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
