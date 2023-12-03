import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsa25mOEj-CeVa1SezGjc4B7YyFmaVvGg",
  authDomain: "blogdev-1e8d3.firebaseapp.com",
  projectId: "blogdev-1e8d3",
  storageBucket: "blogdev-1e8d3.appspot.com",
  messagingSenderId: "1093548155336",
  appId: "1:1093548155336:web:564f3efcc23f93f461e0fd"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };