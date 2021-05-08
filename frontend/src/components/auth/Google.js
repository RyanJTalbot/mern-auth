// import React from 'react';
// import GoogleLogin from 'react-google-login';
// import axios from 'axios';
// import { createBrowserHistory } from 'history';
// import { refreshGooglToken } from '../config/refreshGoogleToken';

// let history = createBrowserHistory();

// const Google = () => {
// 	const onSuccess = (response) => {
// 		console.log('login success: currentUser:', response.profileObj);
// 		axios
// 			.post({
// 				url: 'http://localhost:8000/auth/google/',
// 			})
// 			.then((response) => {
// 				console.log(response.name, response.data);
// 				// history.pushState('/dashboard');
// 			})
// 			.catch((error) => {
// 				console.log(error.response.data);
// 				console.log(error.response.status);
// 				console.log(error.response.headers);
// 			});
// 		refreshGooglToken;
// 	};

// 	const onFailure = (response) => {
// 		console.log('login failed: res:', response);
// 	};

// 	return (
// 		<div className='pb-3'>
// 			<GoogleLogin
// 				clientId='401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com'
// 				buttonText='Sign in with Google'
// 				onSuccess={onSuccess}
// 				onFailure={onFailure}
// 				cookiePolicy={'single_host_origin'}
// 			/>
// 		</div>
// 	);
// };

// export default Google;

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

			var res = response.profileObj;
			console.log(res);

			this.signup(response);
		};
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
