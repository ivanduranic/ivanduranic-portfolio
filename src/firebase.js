import firebase from "firebase";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyCpLPzdMwTJKNp7oWcQkWCZOBECCcGV-Ac",
    authDomain: "portfolio-e7695.firebaseapp.com",
    databaseURL: "https://portfolio-e7695-default-rtdb.firebaseio.com",
    projectId: "portfolio-e7695",
    storageBucket: "portfolio-e7695.appspot.com",
    messagingSenderId: "76493676510",
    appId: "1:76493676510:web:83b0e85af2ac1cf7acc74f",
    measurementId: "G-HE2ZYKCE20"
  });

  var db = firebaseApp.firestore();

  export { db };