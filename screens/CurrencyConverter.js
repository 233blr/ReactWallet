import React, { useContext, useEffect } from 'react';
import { Keyboard, Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import { CurrencyContextContext } from '../context/CurrencyContext';
import { Button, ConversionInput } from '../components';
import { globalStyles } from '../styles';
import { URL } from '@env';
import currency from '../constans/currency';
import getCurrencyValue from "../API/getCurrencyValue";

const CurrencyConverter = () => {
	const {
		amountTo,
		toggleModal,
		modalValue,
		amountFrom,
		setAmountTo,
		modalVisible,
		currencyValue,
		reverseCurrency,
		addCurrencyValue,
		getConversionSum,
		setConversionInput,
		changeConversionValue,
	} = useContext(CurrencyContextContext);

	useEffect(() => {
		if (amountFrom.length === 0) {
			setAmountTo('');
		} else {
			getCurrencyValue(setAmountTo, `${URL}?from=${currencyValue[0]}&to=${currencyValue[1]}&amount=${amountFrom}`);
		}
	}, [amountFrom, currencyValue]);

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={globalStyles.container}>
				<Modal
					animationType='slide'
					transparent={true}
					visible={modalVisible}
					onRequestClose={toggleModal}
				>
					<View style={globalStyles.modalView}>
						<Text style={[globalStyles.conversionText, globalStyles.modalTitle]}>
							Convert {modalValue.title}:
						</Text>
						{currency
							.filter(item => {
								if (item !== currencyValue[0] && item !== currencyValue[1]) {
									return (
										<Button
											key={item}
											onPressButton={addCurrencyValue}
											btnStyle={[globalStyles.button, globalStyles.buttonOutline]}
											textStyle={globalStyles.buttonOutlineText}
											text={item}
										/>
									);
								}
							})
						}
						<Button
							onPressButton={toggleModal}
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
						onButtonPress={setConversionInput}
						onChangeValue={getConversionSum}
						editable={true}
					/>

					<Text>To</Text>
					<ConversionInput
						text={currencyValue[1]}
						value={amountTo.toString()}
						onButtonPress={changeConversionValue}
						editable={false}
					/>

					<Button
						onPressButton={reverseCurrency}
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
