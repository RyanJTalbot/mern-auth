import React from 'react';
import { useGoogleLogin } from 'react-google-login';

// refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId =
	'1008450596688-sbe1q92ltb7qnn865dbisn9m8q989ldt.apps.googleusercontent.com';

function GoogleLogin() {
	const onSuccess = (res) => {
		console.log('Login Success: currentUser:', res.profileObj);
		alert(
			`Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`,
		);
		refreshTokenSetup(res);
	};

	const onFailure = (res) => {
		console.log('Login failed: res:', res);
		alert(`Failed to login.`);
	};

	const { signIn } = useGoogleLogin({
		onSuccess,
		onFailure,
		clientId,
		isSignedIn: true,
		accessType: 'offline',
		// responseType: 'code',
		// prompt: 'consent',
	});

	return (
		<button onClick={signIn} className='button'>
			<img src='icons/google.svg' alt='google login' className='icon'></img>

			<span className='buttonText'>Sign in with Google</span>
		</button>
	);
}

export default GoogleLogin;
