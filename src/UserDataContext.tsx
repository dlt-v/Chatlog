import { useState, createContext } from 'react';

export const UserDataContext = createContext({
    id: -1,
    avatar: -1,
    name: '',
});

export interface UserState {
    id: number;
    avatar: number;
    name: string;
}

export const UserDataProvider = (props: any) => {
    const [user] = useState<UserState>({
        id: -1,
        avatar: -1,
        name: '',
    });

    return (
        <UserDataContext.Provider value={user}>
            {props.children}
        </UserDataContext.Provider>
    );
};
