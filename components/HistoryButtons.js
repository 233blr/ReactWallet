import React, { useState } from "react";
import { globalStyles } from "../styles";
import { Text, TouchableOpacity } from "react-native";

const HistoryButtons = ({setFrom, setTo}) => {
	const [flag, setFlag] = useState(true);

	return (
		<>
			<TouchableOpacity
				onPress={() => {
					setFrom();
					setFlag(true)
				}
			}
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
				onPress={() => {
					setTo();
					setFlag(false)
				}
				}
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
