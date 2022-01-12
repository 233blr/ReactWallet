import React, { useContext, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, View, } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { LoginContext } from '../context/LoginContext';
import { globalStyles } from '../styles';
import { Button } from '../components';
import { auth } from '../firebase';

const Login = () => {
	const {
		email,
		password,
		handelLogIn,
		handelSingUp,
		handleChangeEmail,
		handleChangePassword
	} = useContext(LoginContext);
	const navigation = useNavigation();

	useEffect(() => {
		return auth.onAuthStateChanged(user => {
			if (user) {
				navigation.replace('Main');
			}
		});
	}, []);

	return (
		<KeyboardAvoidingView
			style={globalStyles.container}
			behavior='padding'
		>
			<View style={globalStyles.inputContainer}>
				<TextInput
					placeholder='Email'
					value={email}
					onChangeText={handleChangeEmail}
					style={globalStyles.input}
				/>
				<TextInput
					placeholder='Password'
					value={password}
					onChangeText={handleChangePassword}
					style={globalStyles.input}
					secureTextEntry
				/>
			</View>
			<View style={globalStyles.buttonContainer}>
				<Button
					onPressButton={handelLogIn}
					btnStyle={globalStyles.button}
					textStyle={globalStyles.buttonText}
					text={'Login'}
				/>
				<Button
					onPressButton={handelSingUp}
					btnStyle={[globalStyles.button, globalStyles.buttonOutline]}
					textStyle={globalStyles.buttonOutlineText}
					text={'Register'}
				/>
			</View>
		</KeyboardAvoidingView>
	)
};

export default Login;
