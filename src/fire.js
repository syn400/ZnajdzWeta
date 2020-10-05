import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyA1y9NuT2CmfzitnBu4ZjRQKuo3HfRAOAg",
    authDomain: "znajdzweta.firebaseapp.com",
    databaseURL: "https://znajdzweta.firebaseio.com",
    projectId: "znajdzweta",
    storageBucket: "znajdzweta.appspot.com",
    messagingSenderId: "212638672927",
    appId: "1:212638672927:web:24ccd3ad628d158b454d2a",
    measurementId: "G-VM3QSJ9GEK"
});

export default app;