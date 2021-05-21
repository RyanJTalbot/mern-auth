import React from 'react';
import GoogleLogin from 'react-google-login';

function GoogleAuth() {
	const responseGoogle = (response) => {
		console.log('on succes didnt work');
	};
	const success = (res) => {
		var profile = res.getBasicProfile();
		console.log(profile);
		history.push('/dashboard');
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
				redirectUri={'http://localhost:3000/dashboard'}
			/>
		</div>
	);
}

export default GoogleAuth;
