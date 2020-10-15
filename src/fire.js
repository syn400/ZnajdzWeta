import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAaT7cD6zvSuMc8kw92S9V9c4CmxPYgs8w",
    authDomain: "znajdzweta-292009.firebaseapp.com",
    databaseURL: "https://znajdzweta-292009.firebaseio.com",
    projectId: "znajdzweta-292009",
    storageBucket: "znajdzweta-292009.appspot.com",
    messagingSenderId: "541504240851",
    appId: "1:541504240851:web:a7f4c0712703665deda826",
    measurementId: "G-188MG7Z8LK"
});

export default app;