import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';

import { onSnapshot, collection } from '@firebase/firestore';
import db from '../fbconfig';

import { UserHeader } from '../components/UserHeader';
import { Navigation } from '../components/Navigation';
import { LastMessages } from '../components/LastMessages';
import { UserDataContext } from '../UserDataContext';

export const Main: React.FC = () => {
    const { user } = useContext(UserDataContext);
    let history = useHistory();

    useEffect(() => {
        if (user.id === -1) history.push('/login');

        const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
            console.log(snapshot.docs.map((document) => document.data()));
        });

        return unsubscribe;
    }, []);

    return (
        <div className="main">
            <UserHeader />
            <h2>Messages</h2>
            <LastMessages />
            <Navigation />
        </div>
    );
};
