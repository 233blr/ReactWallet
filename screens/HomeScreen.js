import React from 'react';
import { Text, View } from 'react-native';
import { auth } from '../firebase';
import useAuth from "../hooks/useAuth";
import { globalStyles } from '../styles/global';
import Button from "../components/Button";

const HomeScreen = () => {
	const { handelSingOut } = useAuth();

	return (
		<View style={globalStyles.container}>
			<Text>
				Email: {auth.currentUser?.email}
			</Text>
			<Button
				handelFunk={handelSingOut}
				btnStyle={globalStyles.singOutButton}
				textStyle={globalStyles.buttonText}
				text={'Sing out'}
			/>
		</View>
	)
}

export default HomeScreen
