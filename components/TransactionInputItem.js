import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles';

const TransactionInputItem = ({item, onPress}) => {
	return (
		<TouchableOpacity
			key={item}
			style={globalStyles.transactionInputListItem}
			onPress={onPress}
		>
			<Text>
				{item}
			</Text>
		</TouchableOpacity>
	)
}

export default TransactionInputItem;
