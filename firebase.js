import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAOIuHTWCV67gwX9KIPh7hvrkcRiXx_uW4",
  authDomain: "react-notes-50039.firebaseapp.com",
  projectId: "react-notes-50039",
  storageBucket: "react-notes-50039.appspot.com",
  messagingSenderId: "21621768579",
  appId: "1:21621768579:web:2ca547751d555158a9f6b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")