import { useState, createContext } from 'react';

type Props = {
    children: React.ReactNode;
};

export type UserState = {
    id: number;
    avatar: number;
    name: string;
};

const initialContext = {
    user: {
        id: 0,
        avatar: 0,
        name: 'Tomek',
    },
    setUser: (user: UserState) => {},

    openDm: {
        id: -1,
        avatar: -1,
        name: '',
    },

    setOpenDm: (openDm: UserState) => {},
};

export const UserDataContext = createContext(initialContext);

export const UserDataProvider = ({ children }: Props) => {
    const [user, setUser] = useState(initialContext.user);
    const [openDm, setOpenDm] = useState(initialContext.openDm);

    return (
        <UserDataContext.Provider value={{ user, setUser, openDm, setOpenDm }}>
            {children}
        </UserDataContext.Provider>
    );
};
