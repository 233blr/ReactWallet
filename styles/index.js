import { StyleSheet } from 'react-native';
import colors from '../constans/colors';

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputContainer: {
		width: '80%'
	},
	input: {
		backgroundColor: colors.white,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5,
	},
	buttonContainer: {
		width: '60%',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 40,
	},
	button: {
		backgroundColor: colors.blue,
		width: '100%',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
	},
	buttonOutline: {
		backgroundColor: colors.white,
		marginTop: 5,
		borderColor: colors.blue,
		borderWidth: 2,
	},
	buttonText: {
		color: colors.white,
		fontWeight: '700',
		fontSize: 16,
	},
	buttonOutlineText: {
		color: colors.blue,
		fontWeight: '700',
		fontSize: 16,
	},
	singOutButton: {
		backgroundColor: colors.blue,
		width: '60%',
		padding: 15,
		borderRadius: 10,
		alignItems: 'center',
		marginTop: 40,
	},
	inputConversionContainer: {
		width: '80%',
		alignItems: "center"
	},
	conversionInput: {
		backgroundColor: colors.white,
		borderRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginTop: 5,
		marginBottom: 15,
		flexDirection: 'row',
	},
	conversionButton: {
		padding: 3,
		paddingRight: 10,
		borderRightColor: colors.grey,
		borderRightWidth: 1,
	},
	conversionText: {
		fontSize: 18,
		color: colors.blue,
		fontWeight: "bold",
	},
	conversionTextInput: {
		flex: 1,
		padding: 5,
		color: colors.grey,
	},
	modalView: {
		marginTop: 150,
		margin: 20,
		backgroundColor: colors.white,
		borderRadius: 10,
		padding: 35,
		alignItems: "center",
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	modalTitle: {
		color: colors.grey,
	},
	transactionContainer: {
		flex: 1,
		alignItems: "center",
	},
	transactionInput: {
		marginTop: 15,
		width: '80%',
	},
	transactionTextInput: {
		backgroundColor: colors.white,
		borderRadius: 10,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginTop: 5,
		marginBottom: 5,
	},
	transactionInputList: {
		top: 65,
		position: "absolute",
		backgroundColor: colors.white,
		zIndex: 1000,
		elevation: 1000,
		width: '80%',
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
	},
	transactionInputListItem: {
		margin: 15,
	},
	translationHistTitle: {
		marginTop: 30,
	},
	translationHistButtons: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderBottomColor: colors.black,
		borderBottomWidth: 1,
	},
	translationListContainer: {
		backgroundColor: colors.white,
		width: '80%',
		borderRadius: 10,
		marginTop: 10,
	},
	translationFilterButton: {
		margin: 5,
	},
	translationTextButton: {
		fontWeight: '500',
		fontSize: 14,
		color: colors.blue,
	},
	translationTextButtonDisable: {
		color: colors.grey,
	},
	transactionHistList: {
		width: '100%',
	},
	transactionHistItem: {
		margin: 10,
		paddingLeft: 10,
		borderLeftColor: colors.grey,
		borderLeftWidth: 1,
	},
	transactionNoData: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: 200,
	}
})
