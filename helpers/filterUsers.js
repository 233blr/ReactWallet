import { auth } from "../firebase";

const filterUsers = (users, input) => {
	return users.filter((item) => (
			item
				.toLocaleLowerCase()
				.slice(0, input.length) === input.toLocaleLowerCase() &&
			item.toLocaleLowerCase() !== auth.currentUser?.email
		)
	)
}

export default filterUsers;
