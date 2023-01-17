
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBeEIg6dOwARIum-MIDP2hfry0VTs-pm2o",
  authDomain: "vinayak-portfolio-react.firebaseapp.com",
  projectId: "vinayak-portfolio-react",
  storageBucket: "vinayak-portfolio-react.appspot.com",
  messagingSenderId: "148132590715",
  appId: "1:148132590715:web:9694fad23b3a38aade5ede"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()