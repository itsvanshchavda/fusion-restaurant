import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyARmL9FnlHGUyv1pHWBOnfDahwTkw0ppWg",
  authDomain: "fusion---restaurant.firebaseapp.com",
  projectId: "fusion---restaurant",
  storageBucket: "fusion---restaurant.appspot.com",
  messagingSenderId: "966911931307",
  appId: "1:966911931307:web:dfa97631640ebd5cbc58ee",
  measurementId: "G-RRNSXGJD1Z",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
