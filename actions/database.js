import firebase from 'firebase';


 const config = {
    apiKey: "AIzaSyAWZgS3WzRJWThOb8b8bGdSLi8OLuoFeEg",
    authDomain: "reactapp-7fce4.firebaseapp.com",
    databaseURL: "https://reactapp-7fce4.firebaseio.com",
    storageBucket: "reactapp-7fce4.appspot.com",
    messagingSenderId: "804525042836"
  }


firebase.initializeApp(config);
const database  = firebase.database();


export default database;