import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg-nN1ZSBZOxL6fb_UYg_tzTRLDy1ohoM",
  authDomain: "salonapp-ffc3b.firebaseapp.com",
  projectId: "salonapp-ffc3b",
  storageBucket: "salonapp-ffc3b.appspot.com",
  messagingSenderId: "1070983827004",
  appId: "1:1070983827004:web:4b036035afc3fb2638bd39",
  measurementId: "G-6VVQ0MM825"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();

db.settings({
    timestampsInSnapshots: true
})

export default firebase;
