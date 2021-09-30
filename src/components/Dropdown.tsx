import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../UserDataContext';

export const Dropdown: React.FC = () => {
    const { setUser } = useContext(UserDataContext);

    const logoutUser = () => {
        setUser({
            id: -1,
            avatar: -1,
            name: '',
        });
    };

    return (
        <div className="dropdown">
            <Link to="/login" className="dropdown__item">
                <span>Edit Profile</span>
            </Link>
            <Link
                onClick={logoutUser}
                to="/login"
                className="dropdown__item dropdown__item--bold"
            >
                Logout
            </Link>
        </div>
    );
};
