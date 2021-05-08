import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbarz from './Navbarz';
import Footer from '../Footer';
import queryString from 'query-string';
import './Landing.css';
import Google from '../auth/Google';

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
									fontFamily: 'Permanent Marker',
									fontWeight: 'lighter',
									textAlign: 'center',
									marginTop: '8rem',
									marginBottom: '4rem',
								}}
							>
								<b style={{ paddingRight: '1.5rem', fontWeight: 'bold' }}>
									MERN-STACK
								</b>{' '}
								Flashcard Application
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
									style={{ marginRight: '5rem' }}
									className='reg-btn'
									href='/register'
									variant='secondary'
									size='lg'
								>
									Register
								</Button>

								<Button
									className='reg-btn-two'
									href='/login'
									variant='secondary'
									size='lg'
								>
									Sign-In
								</Button>
							</Col>
						</Row>
					</span>
					<div style={{ textAlign: 'center', padding: '3rem 0' }}>
						<Google />
					</div>
				</Container>
				<h5 style={{ textAlign: 'center' }}>
					to sign-in, you can use 'test@mail.com' for email and 'password' for
					password{' '}
				</h5>
				<Footer />
			</div>
		);
	}
}
export default Landing;
