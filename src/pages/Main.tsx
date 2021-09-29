import React from 'react';


import { UserHeader } from '../components/UserHeader';
import { Navigation } from '../components/Navigation';

export const Main: React.FC = () => {
    return (
        <div className="main">
            <UserHeader />
            <h2>This is main page</h2>
            <Navigation />
        </div>
    );
};
