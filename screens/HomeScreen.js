import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
	const { handelSingOut } = useAuth();

	return (
		<View style={styles.container}>
			<Text>
				Email: {auth.currentUser?.email}
			</Text>
			<TouchableOpacity
				onPress={handelSingOut}
				style={styles.button}>
				<Text style={styles.buttonText}>
					Sing out
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		backgroundColor: '#0782F9',
		width: '60%',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
		marginTop: 40,
	},
	buttonText: {
		color: 'white',
		fontWeight: '700',
		fontSize: 16,
	},
});
