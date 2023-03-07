
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIFa1gbo2BWLuHAo3Oozozyt5jK_UShVY",
  authDomain: "devspage-a55cf.firebaseapp.com",
  projectId: "devspage-a55cf",
  storageBucket: "devspage-a55cf.appspot.com",
  messagingSenderId: "91329266555",
  appId: "1:91329266555:web:72941933425ad1b71ef3de",
  measurementId: "G-C2NVHD34Y1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth(app)
export const db=getFirestore()

export const signUp=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password)
}
export const logIn=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}