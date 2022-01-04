import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { globalStyles } from '../styles';
import { db } from '../firebase';
import { Button, TransactionInput, TransactionInputList } from '../components';
import filterUsers from '../helpers/filterUsers';
import checkTransaction from "../helpers/checkTransaction";

const Transactions = () => {
	const [users, setUsers] = useState([]);
	const [currentUsers, setCurrentUsers] = useState([]);
	const [user, setUser] = useState('');
	const [value, setValue] = useState('');

	useEffect(() => {
		db.ref('users').on('value', users => setUsers(Object.values(users.val())));
	}, []);

	return (
		<View style={globalStyles.transactionContainer}>
			<TransactionInput
				placeholder={'user email'}
				title={'To whom to transfer:'}
				value={user}
				onChangeValue={(text) => {
					setUser(text);
					setCurrentUsers(filterUsers(users, text));
				}}
			/>
			<TransactionInputList
				data={currentUsers}
				selectUser={user => {
					setUser(user);
					setCurrentUsers([]);
				}}
			/>
			<TransactionInput
				placeholder={'0'}
				title={'Transfer amount:'}
				keyboardType={'numeric'}
				value={value}
				onChangeValue={(sum) => setValue(sum)}
			/>
			<Button
				onPressButton={() => {
					checkTransaction(user, value, users);
					setUser('');
					setValue('');
					setCurrentUsers([]);
				}}
				text={'Send'}
			/>
		</View>
	)
}

export default Transactions;
