import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import useAuth from "../hooks/useAuth";
import { globalStyles } from '../styles/global';

const HomeScreen = () => {
	const { handelSingOut } = useAuth();

	return (
		<View style={globalStyles.container}>
			<Text>
				Email: {auth.currentUser?.email}
			</Text>
			<TouchableOpacity
				onPress={handelSingOut}
				style={globalStyles.singOutButton}>
				<Text style={globalStyles.buttonText}>
					Sing out
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default HomeScreen
