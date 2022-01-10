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
		setUsers,
		histValues,
		currentUsers,
		sendTransaction,
		setTransactions,
		handleChangeValue,
		handleChangeUserList,
		handleChangeUsersList,
		setTransactionsToUser,
		setTransactionsFromUser,
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
					onChangeValue={handleChangeUsersList}
				/>
				<TransactionInputList
					data={currentUsers}
					selectUser={handleChangeUserList}
				/>
				<TransactionInput
					placeholder={'0'}
					title={'Transfer amount:'}
					keyboardType={'numeric'}
					value={value}
					onChangeValue={handleChangeValue}
				/>
				<Button
					onPressButton={sendTransaction}
					text={'Send'}
				/>

				<Text style={globalStyles.translationHistTitle}>History</Text>
				<View style={globalStyles.translationListContainer}>
					<View style={globalStyles.translationHistButtons}>
						<HistoryButtons
							setFrom={setTransactionsFromUser}
							setTo={setTransactionsToUser}
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
