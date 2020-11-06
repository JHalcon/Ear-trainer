  //import firebase from "firebase"
  var firebase = require("firebase")
  //import { firestorePlugin } from 'vuefire'
  //import 'firebase/database' ;
  //import firestore from "firebase/firestore"
  //import firestore from "firebase/firestore";
  // Your web app's Firebase configuration
  var app = firebase.initializeApp ({
    apiKey: "AIzaSyCof8bIV_tZkqM6AkKyi0Zd5CXDeCKqU5I",
    authDomain: "ear-trainer-ff775.firebaseapp.com",
    databaseURL: "https://ear-trainer-ff775.firebaseio.com",
    projectId: "ear-trainer-ff775",
    storageBucket: "ear-trainer-ff775.appspot.com",
    messagingSenderId: "975821471942",
    appId: "1:975821471942:web:c17991ddb7f8bf1d9697c7"
  });
  // Initialize Firebase
  //const firebaseApp = firebase.initializeApp(firebaseConfig);
  //export default firebaseApp.firestore()
  export default app.firestore();
  //firebaseApp.firestiore.settings({timestampsInSnapshot:true});
  //const db = firebase.firestore()
  //const auth = firebase.auth()
  //export default{
     // database: database()
  //}
  // collection references
  //const testOne = db.collection('testOne')
  
  // export utils/refs
 