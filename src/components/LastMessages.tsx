import React from 'react';

import av0 from '../styles/img/av-0.svg';
import av1 from '../styles/img/av-1.svg';
import av2 from '../styles/img/av-2.svg';
import av3 from '../styles/img/av-3.svg';
import { HistoryMessage } from './HistoryMessage';

export const LastMessages: React.FC = () => {
    const last = [
        {
            id: 1,
            avatar: av0,
            name: 'Kalafior',
            time: '12:50',
            message: 'siema co tam u ciebie',
            unread: 3,
        },
        {
            id: 2,
            avatar: av1,
            name: 'Baran',
            time: '11:50',
            message: 'co tam',
            unread: 1,
        },
        {
            id: 3,
            avatar: av2,
            name: 'Koniczyna',
            time: '18:20',
            message: 'witam serdecznie, skad sie biora takie zwierzeta jak ty?',
            unread: 0,
        },
        {
            id: 4,
            avatar: av0,
            name: 'Kalafior',
            time: '12:50',
            message: 'siema co tam u ciebie',
            unread: 3,
        },
        {
            id: 5,
            avatar: av1,
            name: 'Baran',
            time: '11:50',
            message: 'co tam',
            unread: 1,
        },
        {
            id: 6,
            avatar: av2,
            name: 'Koniczyna',
            time: '18:20',
            message: 'witam serdecznie, skad sie biora takie zwierzeta jak ty?',
            unread: 0,
        },
        {
            id: 7,
            avatar: av0,
            name: 'Kalafior',
            time: '12:50',
            message: 'siema co tam u ciebie',
            unread: 3,
        },
        {
            id: 8,
            avatar: av1,
            name: 'Baran',
            time: '11:50',
            message: 'co tam',
            unread: 1,
        },
        {
            id: 9,
            avatar: av2,
            name: 'Koniczyna',
            time: '18:20',
            message: 'witam serdecznie, skad sie biora takie zwierzeta jak ty?',
            unread: 0,
        },
    ];
    return (
        <div className="lastMessages">
            {last.map((e) => (
                <HistoryMessage
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    time={e.time}
                    message={e.message}
                    unread={e.unread}
                />
            ))}
        </div>
    );
};
