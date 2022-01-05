import React, { useContext, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, View, } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { LoginContext } from '../context/LoginContext';
import { globalStyles } from '../styles';
import { Button } from '../components';
import { auth } from '../firebase';
import UseAuth from '../hooks/useAuth';

const Login = () => {
	const {email, password, addValues} = useContext(LoginContext);
	const {handelLogIn, handelSingUp} = UseAuth();
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
