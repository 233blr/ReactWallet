import React, { useEffect, useState } from 'react';
import { Keyboard, Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
// import { URL } from '../api/exchangerate';
import { globalStyles } from '../styles';
import { Button, ConversionInput } from '../components';
import modalValues from '../constans/modalValues';
import currency from '../constans/currency';
import axios from 'axios';
import { URL } from "@env";

const CurrencyConverter = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const [modalValue, setModalValue] = useState({});
	const [currencyValue, setCurrencyValue] = useState(['USD', 'EUR']);
	const [amountFrom, setAmountFrom] = useState('');
	const [amountTo, setAmountTo] = useState('');

	useEffect(() => {
		if (amountFrom.length === 0) {
			setAmountTo('');
		} else {
			axios.get(`${URL}?from=${currencyValue[0]}&to=${currencyValue[1]}&amount=${amountFrom}`)
				.then(response => setAmountTo(response.data.result.toFixed(2)))
				.catch(error => alert(error.message))
		}
	}, [amountFrom, currencyValue]);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={globalStyles.container}>
				<Modal
					animationType='slide'
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => setModalVisible(!modalVisible)}
				>
					<View style={globalStyles.modalView}>
						<Text style={[globalStyles.conversionText, globalStyles.modalTitle]}>
							Convert {modalValue.title}:
						</Text>
						{currency
							.filter(item => item !== currencyValue[0] && item !== currencyValue[1])
							.map(item => (
								<Button
									key={item}
									onPressButton={() => {
										setCurrencyValue(prevValue => {
											prevValue.splice(modalValue.value, 1, item)
											return [...prevValue];
										});
										setModalVisible(!modalVisible);
									}}
									btnStyle={[globalStyles.button, globalStyles.buttonOutline]}
									textStyle={globalStyles.buttonOutlineText}
									text={item}
								/>
							))}
						<Button
							onPressButton={() => setModalVisible(!modalVisible)}
							btnStyle={globalStyles.singOutButton}
							textStyle={globalStyles.buttonText}
							text={'Close'}
						/>
					</View>
				</Modal>
				<View style={globalStyles.inputConversionContainer}>

					<Text>From</Text>
					<ConversionInput
						text={currencyValue[0]}
						value={amountFrom.toString()}
						onButtonPress={() => {
							setModalVisible(true);
							setModalValue(modalValues[0]);
						}}
						onChangeValue={text => setAmountFrom(text)}
						editable={true}
					/>

					<Text>To</Text>
					<ConversionInput
						text={currencyValue[1]}
						value={amountTo.toString()}
						onButtonPress={() => {
							setModalVisible(true);
							setModalValue(modalValues[1]);
						}}
						editable={false}
					/>

					<Button
						onPressButton={() => setCurrencyValue([...currencyValue.reverse()])}
						btnStyle={globalStyles.singOutButton}
						textStyle={globalStyles.buttonText}
						text={'Reverse currency'}
					/>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default CurrencyConverter;
