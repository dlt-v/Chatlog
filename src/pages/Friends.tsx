import React from 'react';

import { Navigation } from '../components/Navigation';

export const Friends: React.FC = () => {
    return (
        <div className="friends">
            <h2>This is friends list page</h2>
            <Navigation friends={true}/>
        </div>
    );
};
