import { auth, db } from '../firebase';

const setDataBase = {
	writeNewUser: (username) => {
		db.ref('users').push(username);
	},
	addNewTransaction: (user, value) => {
		db.ref('transaction').push({
			fromUser: auth.currentUser?.email,
			toUser: user,
			value,
			date: Date.now(),
		});
	},
}

export default setDataBase;
