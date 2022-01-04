import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles';

const Button = ({onPressButton, btnStyle, textStyle, text}) => {
	return (
		<TouchableOpacity
			onPress={onPressButton}
			style={btnStyle ? btnStyle : globalStyles.singOutButton}>
			<Text style={textStyle ? textStyle : globalStyles.buttonText}>
				{text}
			</Text>
		</TouchableOpacity>
	)
}

export default Button;
