import { useState, createContext } from 'react';

type Props = {
    children: React.ReactNode;
};

type UserState = {
    id: number;
    avatar: number;
    name: string;
};

const initialContext = {
    user: {
        id: -1,
        avatar: -1,
        name: '*click button',
    },
    setUser: (user: UserState) => {},
};

export const UserDataContext = createContext(initialContext);

export const UserDataProvider = ({ children }: Props) => {
    const [user, setUser] = useState(initialContext.user);

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};
