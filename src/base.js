// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNN7CxEbNGgFVir-RssSiBsW31wa4YbTc",
    authDomain: "kutec-bd.firebaseapp.com",
    databaseURL: "https://kutec-bd-default-rtdb.firebaseio.com",
    projectId: "kutec-bd",
    storageBucket: "kutec-bd.appspot.com",
    messagingSenderId: "857120449793",
    appId: "1:857120449793:web:befcd2341ab258b3dae700"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);