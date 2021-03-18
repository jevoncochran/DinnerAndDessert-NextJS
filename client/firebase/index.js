import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0JAoUm6DjvNU7ikjsPc-ZWHjGcH4bxeE",
  authDomain: "dinneranddessert-b4bcd.firebaseapp.com",
  projectId: "dinneranddessert-b4bcd",
  storageBucket: "dinneranddessert-b4bcd.appspot.com",
  messagingSenderId: "393771855593",
  appId: "1:393771855593:web:b6f2f9a6d1fc49b406ca78",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const storage = firebase.storage();

export { storage, firebase as default };
