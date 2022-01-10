import React, { createContext, useState } from 'react';
import { auth, rootRef } from "../firebase";
import filterUsers from "../helpers/filterUsers";
import checkTransaction from "../helpers/checkTransaction";

export const TransactionsContext = createContext({});

const TransactionsProvider = ({children}) => {
	const [flag, setFlag] = useState(true);
	const [user, setUser] = useState('');
	const [value, setValue] = useState('');
	const [users, setUsers] = useState([]);
	const [histValues, setHistValues] = useState([]);
	const [currentUsers, setCurrentUsers] = useState([]);

	const setTransactionsToUser = () => {
		rootRef
			.child('transactions')
			.orderByChild('toUser')
			.equalTo(`${auth.currentUser?.email}`)
			.on('value', item => {
				if (item.val()) {
					setHistValues(Object.values(item.val()));
				} else {
					setHistValues(null);
				}
			});
	};

	const setTransactionsFromUser = () => {
		rootRef
			.child('transactions')
			.orderByChild('fromUser')
			.equalTo(`${auth.currentUser?.email}`)
			.on('value', item => {
				if (item.val()) {
					setHistValues(Object.values(item.val()));
				} else {
					setHistValues(null);
				}
			});
	};


	const setUsersList = text => {
		setUser(text);
		setCurrentUsers(filterUsers(users, text));
	};

	const setUserInputList = user => {
		setUser(user);
		setCurrentUsers([]);
	};

	const sendTransaction = () => {
		checkTransaction(user, value, users);
		setUser('');
		setValue('');
		setCurrentUsers([]);
	};

	const handleChangeValue = text => setValue(text);

	const handleChangeUsersList = text => setUsersList(text);

	const handleChangeUserList = user => setUserInputList(user);

	return (
		<TransactionsContext.Provider value={
			{
				user,
				flag,
				value,
				setFlag,
				setUsers,
				histValues,
				currentUsers,
				sendTransaction,
				handleChangeValue,
				handleChangeUserList,
				handleChangeUsersList,
				setTransactionsToUser,
				setTransactionsFromUser,
			}
		}
		>
			{children}
		</TransactionsContext.Provider>
	);
};

export default TransactionsProvider;
