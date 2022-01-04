import { auth, db } from '../firebase';

const setDataBase = {
	writeNewUser: (username) => {
		db
			.ref('users').push(username)
			.catch(error => alert(error.message));
	},
	addNewTransaction: (user, value) => {
		db
			.ref('transactions').push({
			fromUser: auth.currentUser?.email,
			toUser: user.toLowerCase(),
			value,
			date: Date.now(),
		})
			.catch(error => alert(error.message));
	},
}

export default setDataBase;
