import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDBBH7eOJ2JmlwpSf86s3q8UWkEIzipujw",
  authDomain: "moviedb-a465c.firebaseapp.com",
  databaseURL: "https://moviedb-a465c.firebaseio.com",
  projectId: "moviedb-a465c",
  storageBucket: "moviedb-a465c.appspot.com",
  messagingSenderId: "41769656374"
};
const fire = firebase.initializeApp(config);

export default fire;
