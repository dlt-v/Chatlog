import React from 'react';
import { Link } from 'react-router-dom';

export const Dropdown: React.FC = () => {
    return (
        <div className="dropdown">
            <Link to="/login" className="dropdown__item">
                <span>Edit Profile</span>
            </Link>
            <Link to="/login" className="dropdown__item dropdown__item--bold">
                Logout
            </Link>
        </div>
    );
};
