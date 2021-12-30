import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CurrencyConverter, Home, Transactions } from '../screens';
import colors from "../constans/colors";
import icons from "../constans/icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false,
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({focused}) => (
						<Image
							source={icons.homeIcon}
							resizeMode='contain'
							style={{
								width: 25,
								height: 25,
								tintColor: focused ? colors.blue : colors.grey,
							}}
						/>
					)
				}}
			/>
			<Tab.Screen
				name="Currency Converter"
				component={CurrencyConverter}
				options={{
					tabBarIcon: ({focused}) => (
						<Image
							source={icons.currencyExchangeIcon}
							resizeMode='contain'
							style={{
								width: 25,
								height: 25,
								tintColor: focused ? colors.blue : colors.grey,
							}}
						/>
					)
				}}
			/>
			<Tab.Screen
				name="Transactions"
				component={Transactions}
				options={{
					tabBarIcon: ({focused}) => (
						<Image
							source={icons.transactionIcon}
							resizeMode='contain'
							style={{
								width: 25,
								height: 25,
								tintColor: focused ? colors.blue : colors.grey,
							}}
						/>
					)
				}}
			/>
		</Tab.Navigator>
	);
}

export default Tabs;
