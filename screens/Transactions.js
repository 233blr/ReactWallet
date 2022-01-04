import React, { useEffect, useState } from 'react';
import { Button, TransactionInput, TransactionInputList } from '../components';
import { globalStyles } from '../styles';
import { FlatList, Text, View } from 'react-native';
import { auth, db, rootRef } from '../firebase';
import filterUsers from '../helpers/filterUsers';
import checkTransaction from '../helpers/checkTransaction';
import HistoryButtons from "../components/HistoryButtons";
import HistItem from "../components/HistItem";

const Transactions = () => {
	const [users, setUsers] = useState([]);
	const [currentUsers, setCurrentUsers] = useState([]);
	const [user, setUser] = useState('');
	const [value, setValue] = useState('');
	const [histValues, setHistValues] = useState([]);

	const setTransactions = (value, email) => {
		rootRef
			.child('transactions')
			.orderByChild(`${value}`)
			.equalTo(`${email}`)
			.on('value', item => setHistValues(Object.values(item.val())));
	};

	useEffect(() => {
		db.ref('users').on('value', users => setUsers(Object.values(users.val())));
		setTransactions('fromUser', auth.currentUser?.email);
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

			<Text style={globalStyles.translationHistTitle}>History</Text>
			<View style={globalStyles.translationListContainer}>
				<View style={globalStyles.translationHistButtons}>
					<HistoryButtons
						setFrom={() => setTransactions('fromUser', auth.currentUser?.email)}
						setTo={() => setTransactions('toUser', auth.currentUser?.email)}
					/>
				</View>
				<FlatList
					style={globalStyles.transactionHistList}
					data={histValues}
					renderItem={({item}) => <HistItem data={item}/>}
				/>
			</View>
		</View>
	)
}

export default Transactions;
