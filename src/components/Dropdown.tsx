import React from 'react';

// interface Props {
//     options: {}[];
// }

export const Dropdown: React.FC = () => {
    return (
        <div className="dropdown">
            <div className="dropdown__item">Edit Profile</div>
            <div className="dropdown__item">Logout</div>
        </div>
    );
};
