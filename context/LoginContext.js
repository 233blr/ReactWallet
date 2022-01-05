import React, { createContext, useState } from 'react';

export const LoginContext = createContext({});

const LoginProvider = ({children}) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const addValues = (text, value) => {
		if (value === 'email') setEmail(text);
		else setPassword(text);
	}

	return (
		<LoginContext.Provider value={
			{
				email,
				password,
				addValues
			}
		}
		>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginProvider;
