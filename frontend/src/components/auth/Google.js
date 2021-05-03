import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const Google = () => {
	const responseGoogle = (response) => {
		console.log(response.tokenId);
		axios({
			method: 'POST',
			url: `${process.env.REACT_APP_API}/google-login`,
			data: { idToken: response.tokenId },
		})
			.then((resposne) => {
				console.log('Google Signin Successful', response);
				// inform parent component
			})
			.catch((error) => {
				console.log('Google Sign in Error', error.response);
			});
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
};

// const Google = ({ informParent = (f) => f }) => {
// 	const responseGoogle = (response) => {
// 		console.log(response.tokenId);
// 		axios({
// 			method: 'POST',
// 			url: `${process.env.REACT_APP_API}/google-login`,
// 			data: { idToken: response.tokenId },
// 		})
// 			.then((response) => {
// 				console.log('GOOGLE SIGNIN SUCCESS', response);
// 				// inform parent component
// 				informParent(response);
// 			})
// 			.catch((error) => {
// 				console.log('GOOGLE SIGNIN ERROR', error.response);
// 			});
// 	};
// 	return (
// 		<div className='pb-3'>
// 			<GoogleLogin
// 				clientId={`${process.env.GOOGLE_CLIENT_ID}`}
// 				onSuccess={responseGoogle}
// 				onFailure={responseGoogle}
// 				render={(renderProps) => (
// 					<button
// 						onClick={renderProps.onClick}
// 						disabled={renderProps.disabled}
// 						className='btn btn-danger btn-lg btn-block'
// 					>
// 						<i className='fab fa-google pr-2'></i> Login with Google
// 					</button>
// 				)}
// 				cookiePolicy={'single_host_origin'}
// 			/>
// 		</div>
// 	);
// };

export default Google;
