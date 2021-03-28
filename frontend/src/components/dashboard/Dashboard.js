import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import NavbarUser from '../layout/NavbarUser';
import Footer from '../../components/Footer';

class Dashboard extends Component {
	onLogoutClick = (e) => {
		e.preventDefault();
		this.props.logoutUser();
	};

	render() {
		const { user } = this.props.auth;

		return (
			<div>
				<NavbarUser />
				<div style={{ height: '75vh' }} className='container valign-wrapper'>
					<div className='row'>
						<div
							className='col s12 center-align'
							style={{ marginTop: '8rem', textAlign: 'center' }}
						>
							<h4 style={{ fontSize: '3rem' }}>
								<b>Hi,</b> {user.name.split(' ')[0]}
								<p className='flow-text grey-text text-darken-1'>
									You are logged into the MERN flashcard app{' '}
									<span style={{ fontFamily: 'monospace' }}>by </span>RyanJT.dev
									👏
								</p>
							</h4>
							<button
								style={{
									width: '150px',
									borderRadius: '3px',
									letterSpacing: '1.5px',

									fontSize: '2rem',
									marginTop: '4rem',
								}}
								onClick={this.onLogoutClick}
								className='btn btn-large waves-effect waves-light hoverable blue accent-3'
							>
								Logout
							</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
