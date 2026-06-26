import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACBYA05zy86VV2gtU0Iwqz711vLR4EZA0",
  authDomain: "travel-blog-3159c.firebaseapp.com",
  projectId: "travel-blog-3159c",
  storageBucket: "travel-blog-3159c.firebasestorage.app",
  messagingSenderId: "742482529570",
  appId: "1:742482529570:web:1422cd382f16634c2ca97b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
