// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { API_KEY, AUTH_DOMAIN, DB_URL, PROJECT_ID, STORAGE_BUCKET, MS_ID, APP_ID} from "@env";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: API_KEY,
	authDomain: AUTH_DOMAIN,
	databaseURL: DB_URL,
	projectId: PROJECT_ID,
	storageBucket: STORAGE_BUCKET,
	messagingSenderId: MS_ID,
	appId: APP_ID
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

export const auth = firebase.auth();
export const db = firebase.database();
export const rootRef = db.ref();
