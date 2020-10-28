import firebase from "firebase";

const FIRE_KEY = process.env.FIRE_KEY;
const config = {
  apiKey: FIRE_KEY,
  authDomain: "moviedb-a465c.firebaseapp.com",
  databaseURL: "https://moviedb-a465c.firebaseio.com",
  projectId: "moviedb-a465c",
  storageBucket: "moviedb-a465c.appspot.com",
  messagingSenderId: "41769656374",
};
const fire = firebase.initializeApp(config);

export default fire;
