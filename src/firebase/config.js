import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyDFRmyXieD_nORwEgY_QRoCsVU5fE6FahU",
authDomain: "doll-makeup-store.firebaseapp.com",
projectId: "doll-makeup-store",
storageBucket: "doll-makeup-store.firebasestorage.app",
messagingSenderId: "167671787509",
appId: "1:167671787509:web:4504e3c6de58fb232ffabc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
