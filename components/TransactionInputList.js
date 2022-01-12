import React from 'react';
import { FlatList } from 'react-native';
import { globalStyles } from '../styles';
import TransactionInputItem from "./TransactionInputItem";
import keyExtractor from "../helpers/keyExtractor";

const TransactionInput = ({data, selectUser}) => {
	return (
		data ?
			<FlatList
				style={globalStyles.transactionInputList}
				data={data}
				renderItem={({item}) => (
					<TransactionInputItem
						item={item}
						onPress={selectUser}
					/>
				)
				}
				keyExtractor={keyExtractor}
			/> :
			null
	)
}

export default TransactionInput;
