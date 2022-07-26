// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
	apiKey: "AIzaSyB1e6wopCHysh1zc5wS3GMaeIdydRpXVko",
	authDomain: "ticket-system-2e9c6.firebaseapp.com",
	projectId: "ticket-system-2e9c6",
	storageBucket: "ticket-system-2e9c6.appspot.com",
	messagingSenderId: "26909421692",
	appId: "1:26909421692:web:b9eec1f6e52068c05859f9"
  };

initializeApp(config);
const database = getDatabase();

export default database;
