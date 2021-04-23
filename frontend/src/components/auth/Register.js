import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import classnames from 'classnames';
import Navbarz from '../layout/Navbarz';
import Footer from '../Footer';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {},
		};
	}

	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors,
			});
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.id]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
		};

		this.props.registerUser(newUser, this.props.history);
	};

	render() {
		const { errors } = this.state;
		return (
			<div>
				<Navbarz />
				<div className='container'>
					<div className='row'>
						<div
							className='col s8 offset-s2'
							style={{ paddingLeft: '11.250px', fontSize: '2rem' }}
						>
							<div
								className='col s12'
								style={{ textAlign: 'center', marginTop: '4rem' }}
							>
								<h4 style={{ fontSize: '3rem' }}>
									<b>Register</b> below
								</h4>
								<p className='grey-text text-darken-1'>
									Already have an account? <Link to='/login'>Log in</Link>
								</p>
							</div>
							<hr style={{ margin: '3rem' }}></hr>
							<form noValidate onSubmit={this.onSubmit}>
								<div style={{ marginLeft: '32%', marginTop: '1rem' }}>
									<label htmlFor='name'>Name: </label>
									<input
										style={{ marginLeft: '1rem' }}
										onChange={this.onChange}
										value={this.state.name}
										error={errors.name}
										id='name'
										type='text'
										className={classnames('', {
											invalid: errors.name,
										})}
									/>

									<span className='red-text'>{errors.name}</span>
								</div>
								<div style={{ marginLeft: '32%', marginTop: '1rem' }}>
									<label htmlFor='email'>Email: </label>
									<input
										style={{ marginLeft: '1.5rem' }}
										onChange={this.onChange}
										value={this.state.email}
										error={errors.email}
										id='email'
										type='email'
										className={classnames('', {
											invalid: errors.email,
										})}
									/>

									<span className='red-text'>{errors.email}</span>
								</div>
								<div style={{ marginLeft: '29%', marginTop: '1rem' }}>
									<label htmlFor='password'>Password: </label>
									<input
										style={{ marginLeft: '1.2rem' }}
										onChange={this.onChange}
										value={this.state.password}
										error={errors.password}
										id='password'
										type='password'
										className={classnames('', {
											invalid: errors.password,
										})}
									/>

									<span className='red-text'>{errors.password}</span>
								</div>
								<div style={{ marginLeft: '19%', marginTop: '1rem' }}>
									<label htmlFor='password2'>Confirm Password: </label>
									<input
										style={{ marginLeft: '.8rem' }}
										onChange={this.onChange}
										value={this.state.password2}
										error={errors.password2}
										id='password2'
										type='password'
										className={classnames('', {
											invalid: errors.password2,
										})}
									/>

									<span className='red-text'>{errors.password2}</span>
								</div>
								<div style={{ textAlign: 'center' }}>
									<button
										style={{
											width: '150px',
											borderRadius: '3px',
											letterSpacing: '1.5px',
											marginTop: '5rem',
											fontSize: '2rem',
											border: '1px solid black',
										}}
										type='submit'
										className='btn btn-large waves-effect waves-light hoverable blue accent-3'
									>
										Sign up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
