import React, { useEffect, useState } from 'react';
import { Button, TransactionInput, TransactionInputList } from '../components';
import { globalStyles } from '../styles';
import { FlatList, Text, View } from 'react-native';
import { auth, db, rootRef } from '../firebase';
import filterUsers from '../helpers/filterUsers';
import checkTransaction from '../helpers/checkTransaction';
import HistoryButtons from "../components/HistoryButtons";
import TransactionHistItem from "../components/TransactionHistItem";

const Transactions = () => {
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
				{
					histValues ? (
						<FlatList
							style={globalStyles.transactionHistList}
							data={histValues}
							renderItem={({item}) => <TransactionHistItem data={item}/>}
							keyExtractor={(item, index) => index.toString()}
						/>
					) : (
						<View style={globalStyles.transactionNoData}>
							<Text>No transactions</Text>
						</View>
					)
				}
			</View>
		</View>
	)
}

export default Transactions;
