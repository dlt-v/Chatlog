import React, { useState } from 'react';
import { Dropdown } from './Dropdown';

import av0 from '../styles/img/av-0.svg';

export const UserHeader: React.FC = () => {
    const [close, setClose] = useState(false);
    return (
        <div>
            <div className="main__userHeader">
                <img src={av0} alt="avatar" />
                <span className="main__userHeader__userName">Ammulah</span>
                <span
                    onClick={() => setClose(!close)}
                    className={close ? 'icon-back' : 'icon-options'}
                ></span>
            </div>
            {close && <Dropdown />}
        </div>
    );
};
