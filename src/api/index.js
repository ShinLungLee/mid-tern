import {getApps,getApp,initializeApp} from "firebase/app";
import {getFirestore,collection,addDoc, getDocs, deleteDoc} from "firebase/firestore";
import products from "../json/products.json"

const firebaseConfig = {
  apiKey: "AIzaSyAFIkoWrM895k-eFDLZDjJ6pcvqZOEle64",
  authDomain: "fin-tern.firebaseapp.com",
  projectId: "fin-tern",
  storageBucket: "fin-tern.appspot.com",
  messagingSenderId: "311834453133",
  appId: "1:311834453133:web:1932b1a42443d539c32ec4"
};

  const app_length =getApps().length > 0;

  // Initialize Firebase
  const app = app_length?getApp():initializeApp(firebaseConfig);
  // REFERENCE DB
  const db = getFirestore(app);
  // REFERENCE COLLECTION
  const productsCollection = collection(db, "products"); 

  export const feedProducts = async () => {
    // DELETE ALL EXISTING DOCS
    const querySnapshot = await getDocs(productsCollection);
    querySnapshot.forEach(async (product) => {
      await deleteDoc(doc(db, "products", product.id));
    });
    // ADD NEW DOCS
    products.forEach(async (product) => {
      const docRef = await doc(productsCollection);
      await setDoc(docRef, { ...product, id: docRef.id, category: product.category.toUpperCase() });
    });
  };

