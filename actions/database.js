import firebase from 'firebase';


 const config = {
     apiKey: "AIzaSyAWZgS3WzRJWThOb8b8bGdSLi8OLuoFeEg",
    authDomain: "reactapp-7fce4.firebaseapp.com",
    databaseURL: "https://reactapp-7fce4.firebaseio.com"
   
  };

firebase.initializeApp(config);
const database  = firebase.database();


export default database;