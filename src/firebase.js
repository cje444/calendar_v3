import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  //   인증정보를 넣어주세요!
  apiKey: "AIzaSyCaRwYiax9wHkm802Uv9QuxmrJWWI1MO-A",
  authDomain: "react-calendar-cje.firebaseapp.com",
  projectId: "react-calendar-cje",
  storageBucket: "react-calendar-cje.appspot.com",
  messagingSenderId: "876505765628",
  appId: "1:876505765628:web:10b6f3b24b9bfb2e31a979",
  measurementId: "G-B21XQNZZRJ",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
