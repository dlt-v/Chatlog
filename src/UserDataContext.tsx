import { useState, createContext } from 'react';

type Props = {
    children: React.ReactNode;
};

export type UserState = {
    id: string;
    avatar: number;
    name: string;
    friends?: number[];
};

const initialContext = {
    user: {
        id: "Mm7qR069T0fyU77IDRPG",
        avatar: 0,
        name: 'Tomek',
    },
    setUser: (user: UserState) => {},

    openDm: {
        id: "-1",
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
