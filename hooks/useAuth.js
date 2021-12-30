import { auth } from '../firebase';
import { useNavigation } from "@react-navigation/core";

const UseAuth = () => {
	const navigation = useNavigation();

	return ({
		handelSingUp: (email, password) => {
			auth
				.createUserWithEmailAndPassword(email, password)
				// .then(userCredentials => {
				// 	const user = userCredentials.user;
				// 	console.log('Registered with', user.email)
				// })
				.catch(error => alert(error.message));
		},
		handelLogIn: (email, password) => {
			auth
				.signInWithEmailAndPassword(email, password)
				// .then(userCredentials => {
				// 	const user = userCredentials.user;
				// 	console.log('Login with', user.email);
				// })
				.catch(error => alert(error.message))
		},
		handelSingOut: () => {
			auth
				.signOut()
				.then(() => {
					navigation.replace("Login");
				})
				.catch(error => alert(error.message))
		},
	});
}

export default UseAuth;
