import React, { createContext, useState } from 'react';
import { rootRef } from "../firebase";
import filterUsers from "../helpers/filterUsers";
import checkTransaction from "../helpers/checkTransaction";

export const TransactionsContext = createContext({});

const TransactionsProvider = ({children}) => {
	const [user, setUser] = useState('');
	const [value, setValue] = useState('');
	const [users, setUsers] = useState([]);
	const [histValues, setHistValues] = useState([]);
	const [currentUsers, setCurrentUsers] = useState([]);

	const setTransactions = (value, email) => {
		rootRef
			.child('transactions')
			.orderByChild(`${value}`)
			.equalTo(`${email}`)
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

	return (
		<TransactionsContext.Provider value={
			{
				user,
				value,
				setValue,
				setUsers,
				histValues,
				currentUsers,
				setTransactions,
				setUsersList,
				setUserInputList,
				sendTransaction
			}
		}
		>
			{children}
		</TransactionsContext.Provider>
	);
};

export default TransactionsProvider;
