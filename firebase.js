// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA_y2uNXwQMGK83UzdwDZeJteDryIgf6PU",
	authDomain: "nativewallet-de9f5.firebaseapp.com",
	projectId: "nativewallet-de9f5",
	storageBucket: "nativewallet-de9f5.appspot.com",
	messagingSenderId: "442432294851",
	appId: "1:442432294851:web:dca4eb6db8101e44883776"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const auth = firebase.auth();

export { auth };
