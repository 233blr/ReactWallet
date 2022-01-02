import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPressButton, btnStyle, textStyle, text}) => {
	return (
		<TouchableOpacity
			onPress={onPressButton}
			style={btnStyle}>
			<Text style={textStyle}>
				{text}
			</Text>
		</TouchableOpacity>
	)
}

export default Button;
