import React from 'react';
import Tabs from './navigator/tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "react-native";
import { Login } from './screens';
import LoginProvider from './context/LoginContext';
import TransactionsProvider from "./context/TransactionsContext";
import CurrencyContextProvider from "./context/CurrencyContext";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<CurrencyContextProvider>
			<TransactionsProvider>
				<LoginProvider>
					<NavigationContainer>
						<Stack.Navigator>
							<Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
							<Stack.Screen options={{headerShown: false}} name="Main" component={Tabs}/>
						</Stack.Navigator>
						<StatusBar barStyle='dark-content'/>
					</NavigationContainer>
				</LoginProvider>
			</TransactionsProvider>
		</CurrencyContextProvider>
	);
}

export default App;
