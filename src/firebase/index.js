import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFZKaanXXd7XymYQArdXTM2u5osRkSrIc",
  authDomain: "fir-react-up.firebaseapp.com",
  databaseURL: "https://fir-react-up.firebaseio.com",
  projectId: "fir-react-up",
  storageBucket: "fir-react-up.appspot.com",
  messagingSenderId: "1047300457652",
  appId: "1:1047300457652:web:cbe2250a3328ab2e6183e1",
  measurementId: "G-32M9JV62FZ"


};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
