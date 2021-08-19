import firebase from 'firebase/app'
import 'firebase/auth'

 firebaseConfig = {

    apiKey: "AIzaSyBYjEHuER5gKpWFahx7evhQj9vHdVILJNY",

    authDomain: "verify-otp-a4646.firebaseapp.com",

    projectId: "verify-otp-a4646",

    storageBucket: "verify-otp-a4646.appspot.com",

    messagingSenderId: "322497483335",

    appId: "1:322497483335:web:ede3c9b4bbd33ac1789762"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
