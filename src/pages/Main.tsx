import React from 'react';

import { Navigation } from '../components/Navigation';

export const Main: React.FC = () => {
    return (
        <div className="main">
            <h1>This is main page</h1>
            <Navigation />
        </div>
    );
};
