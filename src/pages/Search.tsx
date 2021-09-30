import React from 'react';

import { Navigation } from '../components/Navigation';

export const Search: React.FC = () => {
    return (
        <div className="search">
            <h2>This is search user page</h2>
            <Navigation search={true} />
        </div>
    );
};
