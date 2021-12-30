import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ handelFunk, btnStyle, textStyle, text }) => {
	return (
			<TouchableOpacity
				onPress={handelFunk}
				style={btnStyle}>
				<Text style={textStyle}>
					{text}
				</Text>
			</TouchableOpacity>
	)
}

export default Button;
