import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAfaZrBBbQirbDCeb4AOrlMn3f2HJekhdE',
    authDomain: 'chatlog-a4fc6.firebaseapp.com',
    projectId: 'chatlog-a4fc6',
    storageBucket: 'chatlog-a4fc6.appspot.com',
    messagingSenderId: '533050866407',
    appId: '1:533050866407:web:2d17f0dd5ff1bfb0e1c042',
};

initializeApp(firebaseConfig);
export default getFirestore();
