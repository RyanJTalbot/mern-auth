import React from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';

const GoogleAuthContext = React.createContext();

export const GoogleAuthProvider = ({ children }) => {
	const googleAuth = useGoogleLogin({
		clientId:
			'401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com',
		// Your clientID from Google.
	});

	return (
		<GoogleAuthContext.Provider value={googleAuth}>
			{children}
		</GoogleAuthContext.Provider>
	);
};

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);
