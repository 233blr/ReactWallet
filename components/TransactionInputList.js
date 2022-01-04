import React from 'react';
import { FlatList } from 'react-native';
import { globalStyles } from '../styles';
import TransactionInputItem from "./TransactionInputItem";

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
				keyExtractor={(item, index) => index.toString()}
			/> :
			null
	)
}

export default TransactionInput;
