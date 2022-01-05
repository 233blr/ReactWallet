import React, { createContext, useState } from 'react';
import modalValues from "../constans/modalValues";

export const CurrencyContextContext = createContext({});

const CurrencyContextProvider = ({children}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [modalValue, setModalValue] = useState({});
	const [currencyValue, setCurrencyValue] = useState(['USD', 'EUR']);
	const [amountFrom, setAmountFrom] = useState('');
	const [amountTo, setAmountTo] = useState('');

	const addCurrencyValue = () => {
		setCurrencyValue(prevValue => {
			prevValue.splice(modalValue.value, 1, item)
			return [...prevValue];
		});
		setModalVisible(!modalVisible);
	};

	const closeModal = () => setModalVisible(!modalVisible);

	const getConversionSum = (text) => setAmountFrom(text);

	const reverseCurrency = () => setCurrencyValue([...currencyValue.reverse()]);

	const changeConversionValue = () => {
		setModalVisible(true);
		setModalValue(modalValues[1]);
	};

	return (
		<CurrencyContextContext.Provider value={
			{
				amountTo,
				closeModal,
				modalValue,
				amountFrom,
				setAmountTo,
				modalVisible,
				currencyValue,
				setModalValue,
				setModalVisible,
				reverseCurrency,
				addCurrencyValue,
				getConversionSum,
				changeConversionValue,
			}
		}
		>
			{children}
		</CurrencyContextContext.Provider>
	);
};

export default CurrencyContextProvider;
