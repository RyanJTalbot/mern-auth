import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbarz from './Navbarz';
import Footer from '../Footer';
import queryString from 'query-string';
import GoogleAuth from '../oauth/GoogleAuth';
// import GoogleLogin from '../../components/auth/GoogleLogin';

class Landing extends Component {
	componentDidMount() {
		var query = queryString.parse(this.props.location.search);
		if (query.token) {
			window.localStorage.setItem('jwt', query.token);
			this.props.history.push('/');
		}
	}

	render() {
		return (
			<div>
				<Navbarz />

				<Container className='my-auto'>
					<Row>
						<Col>
							<h1
								className='landing-title'
								style={{
									textAlign: 'center',
									marginTop: '8rem',
									marginBottom: '4rem',
								}}
							>
								<b>MERN-STACK</b> Flashcard Application
							</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<h1 className='btn-txt-space'> </h1>
						</Col>
					</Row>
					<span>
						<Row className='justify-content-md-center'>
							<Col md='auto'>
								<Button
									href='/register'
									variant='secondary'
									size='lg'
									style={{ marginRight: '5rem', fontSize: '2rem' }}
								>
									Register
								</Button>

								<Button
									href='/login'
									variant='secondary'
									size='lg'
									style={{ marginLeft: '5rem', fontSize: '2rem' }}
								>
									Sign-In
								</Button>
							</Col>
						</Row>
					</span>
					<div style={{ textAlign: 'center' }}>
						<GoogleAuth />
					</div>

					{/* <GoogleLogin /> */}
				</Container>

				{/* <div style={{ height: '75vh' }} className='container valign-wrapper'>
					<div className='row'>
						<div className='col s12 center-align'>
							<h4>
								<b>MERN-STACK</b> Flashcard Applicaiton{' '}
							</h4>
							<p className='flow-text grey-text text-darken-1'>RyanJT.dev</p>
							<br />
							<div className='col s6'>
								<Link
									to='/register'
									style={{
										width: '140px',
										borderRadius: '3px',
										letterSpacing: '1.5px',
									}}
									className='btn btn-large waves-effect waves-light hoverable blue accent-3'
								>
									Register
								</Link>
							</div>
							<div className='col s6'>
								<Link
									to='/login'
									style={{
										width: '140px',
										borderRadius: '3px',
										letterSpacing: '1.5px',
									}}
									className='btn btn-large btn-flat waves-effect white black-text'
								>
									Log In
								</Link>
							</div>
						</div>
					</div>
				</div> */}
				<Footer />
			</div>
		);
	}
}
export default Landing;
