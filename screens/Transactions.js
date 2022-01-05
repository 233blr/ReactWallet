import React, { useContext, useEffect } from 'react';
import { Button, TransactionInput, TransactionInputList } from '../components';
import { globalStyles } from '../styles';
import { auth, db } from '../firebase';
import { FlatList, Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native';
import { TransactionsContext } from '../context/TransactionsContext';
import HistoryButtons from "../components/HistoryButtons";
import TransactionHistItem from "../components/TransactionHistItem";

const Transactions = () => {
	const {
		user,
		value,
		setValue,
		setUsers,
		histValues,
		currentUsers,
		setUsersList,
		sendTransaction,
		setTransactions,
		setUserInputList,
	} = useContext(TransactionsContext);

	useEffect(() => {
		db.ref('users').on('value', users => setUsers(Object.values(users.val())));
		setTransactions('fromUser', auth.currentUser?.email);
	}, []);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={globalStyles.transactionContainer}>
				<TransactionInput
					placeholder={'user email'}
					title={'To whom to transfer:'}
					value={user}
					onChangeValue={(text) => setUsersList(text)}
				/>
				<TransactionInputList
					data={currentUsers}
					selectUser={user => setUserInputList(user)}
				/>
				<TransactionInput
					placeholder={'0'}
					title={'Transfer amount:'}
					keyboardType={'numeric'}
					value={value}
					onChangeValue={(sum) => setValue(sum)}
				/>
				<Button
					onPressButton={() => sendTransaction}
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
		</TouchableWithoutFeedback>
	)
}

export default Transactions;
