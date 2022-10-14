import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApv4l_F1bJbr1nXsk5RtzempTEkczn_Mg",
    authDomain: "movieapp-6f380.firebaseapp.com",
    projectId: "movieapp-6f380",
    storageBucket: "movieapp-6f380.appspot.com",
    messagingSenderId: "576071546202",
    appId: "1:576071546202:web:b590c854feee18a7dcaf63",
    measurementId: "G-XQZJR3XK1L"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();

// //   const storage = firebase.storage();

  export { auth, provider};
  export default db;
