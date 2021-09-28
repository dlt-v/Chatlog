import React from 'react';

// interface Props {
//     options: {}[];
// }

export const Dropdown: React.FC = () => {
    return (
        <div className="dropdown">
            <div className="dropdown__item">
                <span>Edit Profile</span>
            </div>
            <div className="dropdown__item dropdown__item--bold">Logout</div>
        </div>
    );
};
