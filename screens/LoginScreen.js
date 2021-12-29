import React, { useEffect, useState } from 'react';
import UseAuth from "../hooks/useAuth";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core';
import { globalStyles } from '../styles/global';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { handelLogIn, handelSingUp } = UseAuth();
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
				<TouchableOpacity
					onPress={() => handelLogIn(email, password)}
					style={globalStyles.button}
				>
					<Text style={globalStyles.buttonText}>
						Login
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => handelSingUp(email, password)}
					style={[globalStyles.button, globalStyles.buttonOutline]}
				>
					<Text style={globalStyles.buttonOutlineText}>
						Register
					</Text>
				</TouchableOpacity>
			</View>

		</KeyboardAvoidingView>
	)
};

export default LoginScreen;
