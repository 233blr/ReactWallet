import React from 'react';
import { Text, View } from 'react-native';
import { auth } from '../firebase';
import useAuth from '../hooks/useAuth';
import { globalStyles } from '../styles';
import { Button } from '../components';

const Home = () => {
	const { handelSingOut } = useAuth();

	return (
		<View style={globalStyles.container}>
			<Text>
				Hello {auth.currentUser?.email}!
			</Text>
			<Button
				onPressButton={handelSingOut}
				btnStyle={globalStyles.singOutButton}
				textStyle={globalStyles.buttonText}
				text={'Sing out'}
			/>
		</View>
	)
}

export default Home;
