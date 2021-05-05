// import React from 'react';
// import GoogleLogin from 'react-google-login';
// import axios from 'axios';

// const handleResponse = async (googleData) => {
// 	const res = await fetch('/api/v1/auth/google', {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			token: googleData.tokenId,
// 		}),
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	});
// 	const data = await res.json();
// 	// store returned user in a context?
// };

// return (
// 	<div className='pb-3'>
// 		<GoogleLogin
// 			clientId='401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com'
// 			buttonText='Sign in with Google'
// 			className='ct-button ct-button--secondary'
// 			onSuccess={handleResponse}
// 			onFailure={handleResponse}
// 			cookiePolicy='single_host_origin'
// 		/>
// 	</div>
// );

// export default GoogleLogin;
