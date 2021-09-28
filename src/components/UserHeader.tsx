import React from 'react';

import av0 from '../styles/img/av-0.svg';

export const UserHeader: React.FC = () => {
    return (
        <div className="main__userHeader">
            <img src={av0} alt="avatar" />
            <span className="main__userHeader__userName">Ammulah</span>
            <span className="icon-options"></span>
        </div>
    );
};
