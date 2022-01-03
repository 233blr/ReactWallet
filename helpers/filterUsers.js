const filterUsers = (users, input) => {
	return users.filter((item) => (
			item
				.toLocaleLowerCase()
				.slice(0, input.length) === input.toLocaleLowerCase()
		)
	)
}

export default filterUsers;
