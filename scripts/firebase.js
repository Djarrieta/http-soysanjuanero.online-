//FIREBASE
var config = {
    apiKey: "AIzaSyAnxXJlQC9mOyNnSYzV4utnjYXF29fWoC8",
    authDomain: "soysanjuanero-a5c1c.firebaseapp.com",
    databaseURL: "https://soysanjuanero-a5c1c.firebaseio.com",
    projectId: "soysanjuanero-a5c1c",
    storageBucket: "soysanjuanero-a5c1c.appspot.com",
    messagingSenderId: "344513006950",
    appId: "1:344513006950:web:10250cd62d0e7236d20ca7",
    measurementId: "G-5DX7T59E32"
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
/* const settings = {timestampsInSnapshots: true};
firestore.settings(settings); */
var db = firebase.firestore();