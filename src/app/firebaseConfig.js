import firebase from "firebase";

var firebaseConfig = {
   apiKey: "AIzaSyBolVHhemmNkqRk0QmjRrVP7rd2DYQohak",
   authDomain: "gamja-dev.firebaseapp.com",
   databaseURL: "https://gamja-dev.firebaseio.com",
   projectId: "gamja-dev",
   storageBucket: "gamja-dev.appspot.com",
   messagingSenderId: "599495237201",
   appId: "1:599495237201:web:88c13f0d79591903b12270",
   measurementId: "G-5RTDY5E3E0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const fireStore = firebase.firestore();
export const fireDataBase = firebase.database().ref();
