import React, { createContext, useState } from 'react';
import modalValues from "../constans/modalValues";

export const CurrencyContextContext = createContext({});

const CurrencyContextProvider = ({children}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [modalValue, setModalValue] = useState({});
	const [currencyValue, setCurrencyValue] = useState(['USD', 'EUR']);
	const [amountFrom, setAmountFrom] = useState('');
	const [amountTo, setAmountTo] = useState('');

	const addCurrencyValue = item => {
		setCurrencyValue(prevValue => {
			prevValue.splice(modalValue.value, 1, item)
			return [...prevValue];
		});
		toggleModal();
	};

	const toggleModal = () => setModalVisible(false);

	const getConversionSum = text => setAmountFrom(text);

	const reverseCurrency = () => setCurrencyValue([...currencyValue.reverse()]);

	const changeConversionValue = () => {
		setModalVisible(true);
		setModalValue(modalValues[1]);
	};

	const setConversionInput = () => {
		setModalVisible(true);
		setModalValue(modalValues[0]);
	};

	return (
		<CurrencyContextContext.Provider value={
			{
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
			}
		}
		>
			{children}
		</CurrencyContextContext.Provider>
	);
};

export default CurrencyContextProvider;
