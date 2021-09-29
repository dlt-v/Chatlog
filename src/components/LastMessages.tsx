import React from 'react';
import { HistoryMessage } from './HistoryMessage';

export const LastMessages: React.FC = () => {
    const last = [
        {
            id: 1,
            avatar: 1,
            name: 'Kalafior',
            time: '12:50',
            message: 'siema co tam u ciebie',
            unread: 3,
        },
        {
            id: 2,
            avatar: 2,
            name: 'Baran',
            time: '11:50',
            message: 'co tam',
            unread: 1,
        },
        {
            id: 3,
            avatar: 1,
            name: 'Koniczyna',
            time: '18:20',
            message: 'witam serdecznie, skad sie biora takie zwierzeta jak ty?',
            unread: 0,
        },
        {
            id: 4,
            avatar: 3,
            name: 'Kalafior',
            time: '12:50',
            message: 'siema co tam u ciebie',
            unread: 3,
        },
        {
            id: 5,
            avatar: 2,
            name: 'Baran',
            time: '11:50',
            message: 'co tam',
            unread: 1,
        },
        {
            id: 6,
            avatar: 3,
            name: 'Koniczyna',
            time: '18:20',
            message: 'witam serdecznie, skad sie biora takie zwierzeta jak ty?',
            unread: 0,
        },
        {
            id: 7,
            avatar: 1,
            name: 'Kalafior',
            time: '12:50',
            message: 'siema co tam u ciebie',
            unread: 3,
        },
        {
            id: 8,
            avatar: 2,
            name: 'Baran',
            time: '11:50',
            message: 'co tam',
            unread: 1,
        },
        {
            id: 9,
            avatar: 0,
            name: 'Koniczyna',
            time: '18:20',
            message: 'witam serdecznie, skad sie biora takie zwierzeta jak ty?',
            unread: 0,
        },
    ];
    return (
        <div className="lastMessages">
            {last.map((message) => (
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
