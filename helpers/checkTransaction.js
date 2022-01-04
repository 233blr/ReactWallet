import { Alert } from "react-native";
import setDataBase from "../serviсes/setDataBase";

const checkTransaction = (user, value, users) => {
	if (
		users.some(item => item === user) &&
		value.length !== 0
	) {
		setDataBase.addNewTransaction(user, value);
		Alert.alert(
			'Send',
			`send ${value} to user ${user}`
		);
	} else {
		Alert.alert(
			'Invalid input',
			'Select a user from the list, the transfer amount field must not be empty!'
		);
	}
}

export default checkTransaction;
