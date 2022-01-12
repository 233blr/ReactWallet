import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../styles';

const ConversionInput = ({text, value, onButtonPress, onChangeValue, editable}) => {
	return (
		<View style={globalStyles.conversionInput}>
			<TouchableOpacity
				onPress={onButtonPress}
				style={globalStyles.conversionButton}
			>
				<Text style={globalStyles.conversionText}>
					{text}
				</Text>
			</TouchableOpacity>
			<TextInput
				style={globalStyles.conversionTextInput}
				value={value}
				onChangeText={onChangeValue}
				keyboardType="numeric"
				editable={editable}
				placeholder={'0'}
			/>
		</View>
	)
}

export default ConversionInput;
