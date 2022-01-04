import { auth, db } from '../firebase';

const setDataBase = {
	writeNewUser: (username) => {
		db
			.ref('users').push(username)
			.catch(error => alert(error.message));
	},
	addNewTransaction: (user, value) => {
		db
			.ref('transaction').push({
			fromUser: auth.currentUser?.email,
			toUser: user,
			value,
			date: Date.now(),
		})
			.catch(error => alert(error.message));
	},
}

export default setDataBase;
