import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles';

const TransactionInput = ({data, selectUser}) => {
	return (
		data ?
			<FlatList
				style={globalStyles.transactionInputList}
				data={data}
				renderItem={({item}) => (
					<TouchableOpacity
						style={globalStyles.transactionInputListItem}
						key={item}
						onPress={() => selectUser(item)}
					>
						<Text>
							{item}
						</Text>
					</TouchableOpacity>
				)
				}
			/> :
			null
	)
}

export default TransactionInput;
