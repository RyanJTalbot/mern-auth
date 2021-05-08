// import React, { Component } from 'react';
// import { createBrowserHistory } from 'history';
// import axios from 'axios';
// import { connect } from 'react-redux';
// import * as actions from '../..';

// import { GoogleLogin } from 'react-google-login';

// let history = createBrowserHistory();
// let self;
// class Login extends Component {
// 	responseGoogle = (response) => {
// 		let profile_data = response.profileObj;
// 		let data = {
// 			name: profile_data.name,
// 			profile_picture: profile_data.imageUrl,
// 			username: profile_data.email,
// 			social_signin: {
// 				name: 'google',
// 				id: profile_data.googleId,
// 			},
// 		};

// 		self.createUserOrLoggedIn(data, 'google');
// 	};

// 	createUserOrLoggedIn(data, strategy) {
// 		axios.post('/auth/social_sigin', data).then((res) => {
// 			if (res.status === 200) {
// 				if (res.data.code === 208) {
// 					console.log(res.data);
// 				} else {
// 					console.log(res.data);
// 				}
// 				history.push({
// 					pathname: '/dashboard',
// 					state: { id: res.data.data.social_signin.id },
// 				});
// 				history.go('/dashboard');
// 			} else {
// 				console.log(res);
// 			}
// 		});
// 	}

// 	signup() {
// 		history.push('/signup');
// 		history.go('/signup');
// 	}

// 	render() {
// 		console.log('render...', this.props.social_id);
// 		return (
// 			<div className='row' style={{ padding: '100px 0' }}>
// 				<GoogleLogin
// 					clientId='401853306024-pbig7urt774q77cgeeu7ebq344evo4cu.apps.googleusercontent.com'
// 					render={(renderProps) => (
// 						<button
// 							className='loginBtn loginBtn--google'
// 							onClick={renderProps.onClick}
// 						>
// 							Login with Google
// 						</button>
// 					)}
// 					onSuccess={self.responseGoogle}
// 					onFailure={self.responseGoogle}
// 				/>
// 			</div>
// 		);
// 	}
// }

// function mapStateToProps(state) {
// 	return {
// 		social_id: socialIdReducer.socialId,
// 	};
// }

// export default connect(mapStateToProps, actions)(Login);
// export default connect;
