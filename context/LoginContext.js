import React, { createContext, useState } from 'react';

export const LoginContext = createContext({});

const LoginProvider = ({children}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleChangeEmail = email => setEmail(email);

	const handleChangePassword = pass => setPassword(pass);

	return (
		<LoginContext.Provider value={
			{
				email,
				password,
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
