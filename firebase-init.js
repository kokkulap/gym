import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    query, 
    onSnapshot, 
    orderBy, 
    doc, 
    deleteDoc, 
    updateDoc, 
    where, 
    getDocs, 
    getDoc,
    setDoc,
    enableIndexedDbPersistence // <--- REQUIRED FOR OFFLINE MODE
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- YOUR CONFIGURATION (Hardcoded for stability) ---
const firebaseConfig = {
    apiKey: "AIzaSyCbhY-fV64dDSH9dYRbwWR2cmOyEPWa5jM",
    authDomain: "kokkulagym.firebaseapp.com",
    projectId: "kokkulagym",
    storageBucket: "kokkulagym.firebasestorage.app",
    messagingSenderId: "436253669857",
    appId: "1:436253669857:web:9015ffbcf7d60bc35ebaa0"
  };


// Initialize App
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// --- ENABLE OFFLINE PERSISTENCE ---
// This allows the app to load data even without Wi-Fi
enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          console.log('Persistence failed: Multiple tabs open.');
      } else if (err.code == 'unimplemented') {
          console.log('Persistence not supported by this browser.');
      }
  });

export { 
    auth, 
    db, 
    provider, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged, 
    collection, 
    addDoc, 
    query, 
    onSnapshot, 
    orderBy, 
    doc, 
    deleteDoc, 
    updateDoc, 
    where, 
    getDocs, 
    getDoc,setDoc
};
