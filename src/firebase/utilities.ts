import {
    collection,
    addDoc,
    setDoc,
    doc,
    deleteDoc,
    query,
    where,
    getDocs,
    getDoc,
} from 'firebase/firestore';
import db from './fbconfig';

import { NewUser } from '../pages/Login';
import { LastMessages } from '../../types';

export const handleCreateUser = async (user: NewUser) => {
    const collectionRef = collection(db, 'users');
    const docRef = await addDoc(collectionRef, user);
    return docRef.id;
    //TODO: login new user in context
};

export const handleFindUser = async (searchValue: string, byName: boolean) => {
    if (byName) {
        const collectionRef = collection(db, 'users');
        const q = query(collectionRef, where('name', '==', searchValue));
        const snapshot = await getDocs(q);
        const results = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        return results[0];
    } else {
        const docRef = doc(db, 'users', searchValue);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
    }
};

// Return an array of open chats that our user has currently with other users - for Main.tsx
export const handleFindUserConversations = async (userId: string) => {
    const collectionRef = collection(db, 'chats');
    const q = query(
        collectionRef,
        where('participants', 'array-contains', userId)
    );
    const snapshot = await getDocs(q);
    const results: any[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
    }));

    return results;
};
