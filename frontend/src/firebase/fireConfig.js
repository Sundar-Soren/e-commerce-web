import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIeYppL34V_pJTyWXjOdld98lrbk0-FvI",
  authDomain: "ecommerce-307f3.firebaseapp.com",
  projectId: "ecommerce-307f3",
  storageBucket: "ecommerce-307f3.appspot.com",
  messagingSenderId: "766631278903",
  appId: "1:766631278903:web:004bc21ae19310b4ac82b2",
};
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export default storage;
