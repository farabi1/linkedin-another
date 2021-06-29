import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyADQFb63jmrcNt6QXSE2yCuRpdvrp5TYF0",
    authDomain: "linkedin-clone-yt-another.firebaseapp.com",
    databaseURL: "https://linkedin-clone-yt-another-default-rtdb.firebaseio.com",
    projectId: "linkedin-clone-yt-another",
    storageBucket: "linkedin-clone-yt-another.appspot.com",
    messagingSenderId: "965492942031",
    appId: "1:965492942031:web:5f631a4e120df750dd43ba"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };