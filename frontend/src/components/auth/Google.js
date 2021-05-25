import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';

function GoogleAuth() {
	const responseGoogle = (response) => {
		console.log('on succes didnt work');
	};
	const success = (res) => {
		const history = useHistory;
		var profile = res.getBasicProfile();
		console.log(profile);
		console.log(res.tokenId);
		history.push('/dashboard');
	};

	const handleLogin = async (googleData) => {
		const res = await fetch(
			'https://ecstatic-allen-917012.netlify.app/useAuth',
			{
				method: 'POST',
				body: JSON.stringify({
					token: googleData.tokenId,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);
		const data = await res.json();
		// store returned user in a context?
	};

	return (
		<div>
			<GoogleLogin
				clientId='154114895444-bu5ar17gabc7cjdoquo4k5k2b274mpsu.apps.googleusercontent.com'
				buttonText='Sign in with Google'
				onSuccess={success}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
				uxMode='redirect'
				redirectUri={'https://ecstatic-allen-917012.netlify.app/dashboard'}
				isSignedIn={false}
			/>
		</div>
	);
}

export default GoogleAuth;
