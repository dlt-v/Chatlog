import React, { useState, useEffect, createContext } from 'react';

export const UserDataContext = createContext({});

export interface User {
    //TODO: clear code duplication from Login with App.tsx
    avatar: number;
    name: string;
}

export const UserDataProvider = () => {
    const [user, setUser] = useState<User>({
        //By default user is not logged in
        avatar: -1,
        name: '',
    });

    return (
        <UserDataContext.Provider
            value={[user, setUser]}
        ></UserDataContext.Provider>
    );
};
