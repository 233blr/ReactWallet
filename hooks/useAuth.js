import { auth } from '../firebase';
import { useNavigation } from "@react-navigation/core";

const UseAuth = () => {
	const navigation = useNavigation();

	return ({
		handelSingOut: () => {
			auth
				.signOut()
				.then(() => navigation.replace("Login"))
				.catch(error => alert(error.message))
		},
	});
}

export default UseAuth;
