import React, { useState, useEffect, useContext } from 'react';
import { UserDataContext } from '../UserDataContext';
import { HistoryMessage } from './HistoryMessage';
import { Conversation, Participant } from '../../types';

import { handleFindUserConversations } from '../firebase/utilities';

export interface Recipient {
    name: string;
    avatar: number;
    id: string;
    unread: number;
    message: string;
    time: number;
    key: string;
}

export const LastMessagesContainer: React.FC = () => {
    const [conversations, setConversations] = useState<Recipient[]>([]);
    const { user } = useContext(UserDataContext);

    /** This function finds
     * the recipient's id
     */
    const getRecipientId = (conversation: Conversation) => {
        const recipientId: string | undefined =
            conversation.participantsId.find((id: string) => id !== user.id);

        return recipientId;
    };

    /** This function gets
     * the recipient's details
     */
    const getRecipientDetails = (id: string, conversation: Conversation) => {
        const details: Participant | undefined = conversation.participants.find(
            (details: Participant) => details.id === id
        );

        return details;
    };

    /** This function creates
     * a new array to render
     */
    const createLastMessagesList = (conversations: Conversation[]) => {
        let newConversations: Recipient[] = [];

        for (const conversation of conversations) {
            if (!conversation) return;
            if (!conversation.messages) return;

            const recipientId: string | undefined =
                getRecipientId(conversation);
            if (!recipientId) return;

            const details: Participant | undefined = getRecipientDetails(
                recipientId,
                conversation
            );
            if (!details) return;

            const newConversationObject: Recipient = {
                avatar: details.avatar,
                key: conversation.id,
                id: conversation.id,
                name: details.name,
                time: conversation.messages[0].date.seconds,
                message: conversation.messages[0]?.content,
                unread: 0,
            };
            newConversations.push(newConversationObject);
        }
        setConversations(newConversations);
    };

    /** This function gets
     * list of current
     * user messages
     */
    const fetchConversations = async () => {
        const result: Conversation[] = await handleFindUserConversations(
            `${user.id}`
        );

        createLastMessagesList(result);
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
