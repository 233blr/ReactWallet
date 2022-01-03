import { auth } from '../firebase';
import { useNavigation } from "@react-navigation/core";
import setDataBase from "../serviсes/setDataBase";

const UseAuth = () => {
	const navigation = useNavigation();
	const {writeNewUser} = setDataBase;

	return ({
		handelSingUp: (email, password) => {
			auth
				.createUserWithEmailAndPassword(email, password)
				.then(() => {
					writeNewUser(email);
				})
				.catch(error => alert(error.message));
		},
		handelLogIn: (email, password) => {
			auth
				.signInWithEmailAndPassword(email, password)
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
