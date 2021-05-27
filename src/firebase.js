// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCcckyN1ccyPCnWvcX0zzRkyvw4zAMHS68",
    authDomain: "clone-ae9ff.firebaseapp.com",
    projectId: "clone-ae9ff",
    storageBucket: "clone-ae9ff.appspot.com",
    messagingSenderId: "720872217947",
    appId: "1:720872217947:web:1e8fb46a3c398fe377ce7e",
    measurementId: "G-ZM7C7FMMDW"
  };

    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db = firebaseApp.firestore();
    const auth = firebase.auth();

    export { db, auth };