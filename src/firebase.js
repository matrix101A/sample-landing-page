import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB6XsVwgT0044lLxCTerEsAg9ffGpkmHMU",
  authDomain: "web-dev-assignment-a7da3.firebaseapp.com",
  projectId: "web-dev-assignment-a7da3",
  storageBucket: "web-dev-assignment-a7da3.appspot.com",
  messagingSenderId: "589590220576",
  appId: "1:589590220576:web:8c1725365bfb430dc71145",
  measurementId: "G-E2BC03KJ89",
};

firebase.initializeApp(config);
const auth = firebase.auth();
var db = firebase.firestore();
var storage = firebase.storage();
export { auth, db, storage };
export default firebase;
