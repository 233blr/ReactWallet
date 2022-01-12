import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { globalStyles } from '../styles';

const TransactionInput = ({placeholder, title, keyboardType, value, onChangeValue}) => {
	return (
		<View style={globalStyles.transactionInput}>
			<Text>{title}</Text>
			<TextInput
				style={globalStyles.transactionTextInput}
				value={value}
				onChangeText={onChangeValue}
				placeholder={placeholder}
				keyboardType={keyboardType ? keyboardType : 'default'}
			/>
		</View>
	)
}

export default TransactionInput;
