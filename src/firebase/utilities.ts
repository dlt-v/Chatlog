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
import { OpenChat } from '../components/LastMessagesContainer';

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

export const handleFindUserConversations = async (userId: string) => {
    return [
        {
            name: 'Adam',
            avatar: 1,
            id: 'edgdfgdgd',
            unread: 0,
            message: 'hello there!',
            time: '17:00',
        },
        {
            name: 'Monika',
            avatar: 1,
            id: 'asdfas',
            unread: 0,
            message: "How's it going?",
            time: '21:37',
        },
    ];
};
