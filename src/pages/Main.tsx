import React from 'react';

import { Navigation } from '../components/Navigation';

export const Main: React.FC = () => {
    return (
        <div className="main">
            <h2>This is main page</h2>
            <Navigation />
        </div>
    );
};
