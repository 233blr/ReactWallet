import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, TextInput, View, } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';
import { globalStyles } from '../styles/global';
import Button from "../components/Button";
import UseAuth from "../hooks/useAuth";

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const {handelLogIn, handelSingUp} = UseAuth();
	const navigation = useNavigation();

	useEffect(() => {
		return auth.onAuthStateChanged(user => {
			if (user) {
				navigation.replace("Home");
			}
		});
	}, []);

	return (
		<KeyboardAvoidingView
			style={globalStyles.container}
			behavior="padding"
		>

			<View style={globalStyles.inputContainer}>
				<TextInput
					placeholder="Email"
					value={email}
					onChangeText={text => setEmail(text)}
					style={globalStyles.input}
				/>
				<TextInput
					placeholder="Password"
					value={password}
					onChangeText={text => setPassword(text)}
					style={globalStyles.input}
					secureTextEntry
				/>
			</View>

			<View style={globalStyles.buttonContainer}>
				<Button
					handelFunk={() => handelLogIn(email, password)}
					btnStyle={globalStyles.button}
					textStyle={globalStyles.buttonText}
					text={'Login'}
				/>
				<Button
					handelFunk={() => handelSingUp(email, password)}
					btnStyle={[globalStyles.button, globalStyles.buttonOutline]}
					textStyle={globalStyles.buttonOutlineText}
					text={'Register'}
				/>
			</View>

		</KeyboardAvoidingView>
	)
};

export default LoginScreen;
