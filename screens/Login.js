import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, TextInput, View, } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';
import { globalStyles } from '../styles';
import { Button } from '../components';
import UseAuth from '../hooks/useAuth';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const {handelLogIn, handelSingUp} = UseAuth();
	const navigation = useNavigation();

	useEffect(() => {
		return auth.onAuthStateChanged(user => {
			if (user) {
				navigation.replace('Main');
			}
		});
	}, []);

	const addValues = (text, value) => {
		if (value === 'email') setEmail(text);
		else setPassword(text);
	}

	return (
		<KeyboardAvoidingView
			style={globalStyles.container}
			behavior='padding'
		>

			<View style={globalStyles.inputContainer}>
				<TextInput
					placeholder='Email'
					value={email}
					onChangeText={text => addValues(text, 'email')}
					style={globalStyles.input}
				/>
				<TextInput
					placeholder='Password'
					value={password}
					onChangeText={text => addValues(text, 'pass')}
					style={globalStyles.input}
					secureTextEntry
				/>
			</View>

			<View style={globalStyles.buttonContainer}>
				<Button
					onPressButton={() => handelLogIn(email, password)}
					btnStyle={globalStyles.button}
					textStyle={globalStyles.buttonText}
					text={'Login'}
				/>
				<Button
					onPressButton={() => handelSingUp(email, password)}
					btnStyle={[globalStyles.button, globalStyles.buttonOutline]}
					textStyle={globalStyles.buttonOutlineText}
					text={'Register'}
				/>
			</View>

		</KeyboardAvoidingView>
	)
};

export default Login;
