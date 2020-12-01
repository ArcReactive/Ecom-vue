import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
require("firebase/firestore");


   //  https://firebase.google.com/docs/web/setup#available-libraries -->
{/* <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-analytics.js"></script> */}

// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyBXdKhtvQSk1ptxiOTDhSsS1acC_TqwGFU",
   authDomain: "vue-shop-84d27.firebaseapp.com",
   databaseURL: "https://vue-shop-84d27.firebaseio.com",
   projectId: "vue-shop-84d27",
   storageBucket: "vue-shop-84d27.appspot.com",
   messagingSenderId: "47540287043",
   appId: "1:47540287043:web:21f66c7315fe803367c6f6",
   measurementId: "G-D0X05DQLQD"
 };
 // Initialize Firebase
const fb =  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {fb,db}
//   firebase.analytics();