import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB-lNBg0d7_VXasEXrVG_ZwSemeSQ8zb08",
    authDomain: "ibrar-unichat.firebaseapp.com",
    projectId: "ibrar-unichat",
    storageBucket: "ibrar-unichat.appspot.com",
    messagingSenderId: "899544955346",
    appId: "1:899544955346:web:2bd49c0eeb44f937e0f00b"
}).auth();