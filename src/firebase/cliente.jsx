import firebase from 'firebase/app';
import "@firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDvi1vLj3NW5s0R3k1Gr8X42-JCQG1Zhwg",
    authDomain: "ecommerce-306f4.firebaseapp.com",
    projectId: "ecommerce-306f4",
    storageBucket: "ecommerce-306f4.appspot.com",
    messagingSenderId: "361313175002",
    appId: "1:361313175002:web:c183cec4e80a2c7245ace3"
  });

export const getFirebase = () => {
    return firebaseConfig;
}

export const getFirestore = () => {
    return firebase.firestore(firebaseConfig);
}

  
