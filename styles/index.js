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
})
