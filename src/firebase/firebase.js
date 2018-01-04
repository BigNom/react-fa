import * as firebase from 'firebase'


  // Firebase production Project react-fa
  
const prodConfig = {
    apiKey: "AIzaSyCLG4QUAG7Snl2W7EJt9q33niJL0mOqg3g",
    authDomain: "react-fa.firebaseapp.com",
    databaseURL: "https://react-fa.firebaseio.com",
    projectId: "react-fa",
    storageBucket: "",
    messagingSenderId: "1088308510310"
  };

  // Firebase development Project react-fa-dev

  const devConfig = {
    apiKey: "AIzaSyAqRP4_7-oi6j2gofcI7rznoGYx2pgAs7M",
    authDomain: "react-fa-dev.firebaseapp.com",
    databaseURL: "https://react-fa-dev.firebaseio.com",
    projectId: "react-fa-dev",
    storageBucket: "react-fa-dev.appspot.com",
    messagingSenderId: "851736214121"
  };

  const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const db = firebase.database();
  const auth = firebase.auth();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
    db,
    auth,
    googleAuthProvider,
    firebase
  };
