import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CurrencyConverter, Home, Transactions } from '../screens';
import tabBarIconHandler from "../helpers/tabBarIconHandler";

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: tabBarIconHandler
				}}
			/>
			<Tab.Screen
				name="Currency Converter"
				component={CurrencyConverter}
				options={{
					tabBarIcon: tabBarIconHandler
				}}
			/>
			<Tab.Screen
				name="Transactions"
				component={Transactions}
				options={{
					tabBarIcon: tabBarIconHandler
				}}
			/>
		</Tab.Navigator>
	);
}

export default Tabs;
