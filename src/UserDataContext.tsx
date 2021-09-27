import React, { useState, createContext } from 'react';

export const UserDataContext = createContext({});

export interface User {
    //TODO: clear code duplication from Login with App.tsx
    avatar: number;
    name: string;
}

export const UserDataProvider = (props: any) => {
    const [user, setUser] = useState<User>({
        avatar: -1,
        name: '',
    });

    return (
        <UserDataContext.Provider value={[user, setUser]}>
            {props.children}
        </UserDataContext.Provider>
    );
};
