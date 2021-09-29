import React from 'react';

import { UserHeader } from '../components/UserHeader';
import { Navigation } from '../components/Navigation';
import { LastMessages } from '../components/LastMessages';

export const Main: React.FC = () => {
    return (
        <div className="main">
            <UserHeader />
            <h2>Messages</h2>
            <LastMessages />
            <Navigation />
        </div>
    );
};
