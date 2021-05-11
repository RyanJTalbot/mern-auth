import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

class Google extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	signup(res) {
		const googleResponse = {
			Name: res.profileObj.name,
			email: res.profileObj.email,
			token: res.googleId,
			Image: res.profileObj.imageUrl,
			ProviderId: 'Google',
		};

		axios
			.post('http://localhost:8000/auth/google', googleResponse)

			.then((result) => {
				let responseJson = result;

				sessionStorage.setItem('userData', JSON.stringify(responseJson));

				this.props.history.push('/dashboard');
			});
	}
	render() {
		const responseGoogle = (response) => {
			console.log(response);

			// 1. In the responseGoogle(response) {...} callback function, you should get back a standard JWT located at response.hg.id_token
			console.log(response.qc.id_token);

			var res = response.profileObj;
			console.log(res);

			this.signup(response);
		};

		// 2. Send this token to your server (preferably as an Authorization header)

		// 3. Have your server decode the idtoken by using a common JWT library such as jwt-simple or by sending a GET request to `https://www.googleapis.com/oauth2/v3/tokeninfo?idtoken=YOURTOKENHERE

		// 4. The returned decoded token should have anhd` key equal to the hosted domain you'd like to restrict to.

		return (
			<div className='pb-3'>
				<GoogleLogin
					clientId='401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com'
					buttonText='Sign in with Google'
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
		);
	}
}

export default Google;
