import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { refreshGooglToken } from '../config/refreshGoogleToken';

const Google = () => {
	const onSuccess = (response) => {
		console.log('login success: currentUser:', response.profileObj);
		axios
			.post({
				url: 'https://mern-flashcards-ryanjt.herokuapp.com/users/login',
				data: { id_token: response.googleId, name: response.givenName },
			})
			.then((res) => {
				console.log(name, id_token);
				history.pushState('/dashboard');
			});
		refreshGooglToken;
	};

	const onFailure = (response) => {
		console.log('login failed: res:', response);
	};

	return (
		<div className='pb-3'>
			<GoogleLogin
				clientId='401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com'
				buttonText='Sign in with Google'
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	);
};

export default Google;
