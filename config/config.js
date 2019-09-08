import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDTf3yB37aG5mUhL-Ut76wDX2NrECSGP5w",
    authDomain: "photofeed-a484d.firebaseapp.com",
    databaseURL: "https://photofeed-a484d.firebaseio.com",
    projectId: "photofeed-a484d",
    storageBucket: "",
    messagingSenderId: "972387298269",
    appId: "1:972387298269:web:27e23ef68cac0efe42a434"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const database = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();
