import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CurrencyConverter, Home, Transactions } from '../screens';
import tabBarIcon from "../helpers/tabBarIcon";

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: tabBarIcon
				}}
			/>
			<Tab.Screen
				name="Currency Converter"
				component={CurrencyConverter}
				options={{
					tabBarIcon: tabBarIcon
				}}
			/>
			<Tab.Screen
				name="Transactions"
				component={Transactions}
				options={{
					tabBarIcon: tabBarIcon
				}}
			/>
		</Tab.Navigator>
	);
}

export default Tabs;
