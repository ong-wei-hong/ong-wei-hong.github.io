
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBisxwf53ayUc9fjO8cLhCiMbBeuf8hGjg",
  authDomain: "personal-website-fcdb8.firebaseapp.com",
  databaseURL: "https://personal-website-fcdb8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "personal-website-fcdb8",
  storageBucket: "personal-website-fcdb8.appspot.com",
  messagingSenderId: "772225333283",
  appId: "1:772225333283:web:d856c48b3cc021c26fd996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const messageListRef = ref(database, 'messages');

const pushMessage = (name, message, contact) => {
    const newMessageRef = push(messageListRef);
    set(newMessageRef, {
        "name": name,
        "message": message,
        "contact": contact
    });
};

export default pushMessage;