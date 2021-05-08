import React from 'react';
import { useGoogleAuth } from './GoogleAuthProvider';

const LoginButton = () => {
	const signIn = useGoogleAuth();

	return (
		<button onClick={signIn} className='button'>
			<img src='icons/google.svg' alt='google login' className='icon'></img>

			<span style={{ paddingLeft: '1rem' }} className='buttonText'>
				Sign in with Google
			</span>
		</button>
	);
};

export default LoginButton;
