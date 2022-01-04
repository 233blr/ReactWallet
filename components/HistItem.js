import React from 'react';
import { Text, View } from 'react-native';
import { auth } from "../firebase";
import { globalStyles } from "../styles";

const HistItem = ({data}) => {
	return (
		<View style={globalStyles.transactionHistItem}>
			{
				data.fromUser === auth.currentUser?.email ?
					<Text>to: {data.toUser}</Text> :
					<Text>from: {data.fromUser}</Text>
			}
			<Text>sum: {data.value}</Text>
			<Text>date: {data.date}</Text>
		</View>
	)
}

export default HistItem;
