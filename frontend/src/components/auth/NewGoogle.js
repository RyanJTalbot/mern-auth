import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

export default class Loginbygoogle extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	signup(res) {
		const googleresponse = {
			Name: res.profileObj.name,
			email: res.profileObj.email,
			token: res.googleId,
			Image: res.profileObj.imageUrl,
			ProviderId: 'Google',
		};

		axios.post('http://localhost:8000/auth', googleresponse).then((result) => {
			let responseJson = result;
			sessionStorage.setItem('userData', JSON.stringify(result));
			this.props.history.push('/dashboard');
		});
	}
	render() {
		const responseGoogle = (response) => {
			console.log(response);
			var res = response.profileObj;
			console.log(res);

			this.signup(response);
		};
		return (
			<div>
				<div className='col-sm-12 btn btn-info'>Login</div>
				<GoogleLogin
					clientId='401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com'
					buttonText='Login with Google'
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
				></GoogleLogin>
			</div>
		);
	}
}
