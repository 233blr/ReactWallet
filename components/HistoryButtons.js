import React, { useState } from "react";
import { globalStyles } from "../styles";
import { Text, TouchableOpacity } from "react-native";

const HistoryButtons = ({setFrom, setTo}) => {
	const [flag, setFlag] = useState(true);

	const setTransactionFrom = () => {
		setFrom();
		setFlag(true);
	};

	const setTransactionTo = () => {
		setTo();
		setFlag(false);
	}

	return (
		<>
			<TouchableOpacity
				onPress={setTransactionFrom}
				style={globalStyles.translationFilterButton}
			>
				<Text style={flag ?
					globalStyles.translationTextButton :
					[globalStyles.translationTextButton, globalStyles.translationTextButtonDisable]
				}>
					Outgoing
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={setTransactionTo}
				style={globalStyles.translationFilterButton}
			>
				<Text style={flag ?
					[globalStyles.translationTextButton, globalStyles.translationTextButtonDisable] :
					globalStyles.translationTextButton
				}>
					Incoming
				</Text>
			</TouchableOpacity>
		</>
	)
};

export default HistoryButtons;
