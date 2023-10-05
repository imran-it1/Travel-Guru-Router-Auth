import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyBLA8r97KLnZrmlm6jVoMn25WclawvAjDc",
	authDomain: "travel-guru-a532d.firebaseapp.com",
	projectId: "travel-guru-a532d",
	storageBucket: "travel-guru-a532d.appspot.com",
	messagingSenderId: "1086766330435",
	appId: "1:1086766330435:web:c3a4e7a10a040b0a2c5af6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
