import React, { useContext } from 'react';
import { UserDataContext } from '../UserDataContext';

export const Main: React.FC = () => {
    const { user, setUser } = useContext(UserDataContext);

    return <h1>Hello {user.name}!</h1>;
};
