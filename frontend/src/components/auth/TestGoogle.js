import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { googleOAuth2 } from '../../actions/googleActions';
import classnames from 'classnames';

import GoogleLogin from 'react-google-login';

class TestGoogle extends Component {
	constructor() {
		super();
		this.state = {
			this: '',
		};
	}

	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
			// push user to dashboard when they login
		}

		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors,
			});
		}
	}

	onSubmit = (e) => {
		e.preventDefault();

		// since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
	};

	render() {
		const { errors } = this.state;

		const responseGoogle = (response) => {
			console.log('on succes didnt work');
		};

		const success = (res) => {
			var profile = res.getBasicProfile();
			console.log(profile);
			this.setState({ [e.target.id]: e.target.value });
			const data = {
				this: this.state.data,
			};
			this.props.googleActions(data);
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
}

TestGoogle.propTypes = {
	googleActions: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});
googleOAuth2;

export default connect(mapStateToProps, { googleActions })(TestGoogle);
