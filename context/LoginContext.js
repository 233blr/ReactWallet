import React, { createContext, useState } from 'react';
import { auth } from "../firebase";
import setDataBase from "../serviсes/setDataBase";

export const LoginContext = createContext({});

const LoginProvider = ({children}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handelSingUp = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				setDataBase.writeNewUser(email);
			})
			.catch(error => alert(error.message));
	};

	const handelLogIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.catch(error => alert(error.message))
	};

	const handleChangeEmail = email => setEmail(email);

	const handleChangePassword = pass => setPassword(pass);

	return (
		<LoginContext.Provider value={
			{
				email,
				password,
				handelLogIn,
				handelSingUp,
				handleChangeEmail,
				handleChangePassword,
			}
		}
		>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginProvider;
