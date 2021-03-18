import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navbarz from './Navbarz';

class Landing extends Component {
	render() {
		return (
			<div>
				<Navbarz />

				<Container className='my-auto'>
					<Row>
						<Col>
							<h1 className='landing-title'>
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
								<Button href='/register' variant='secondary' size='lg'>
									Register
								</Button>

								<Button href='/login' variant='secondary' size='lg'>
									Sign-In
								</Button>
							</Col>
						</Row>
					</span>
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
			</div>
		);
	}
}
export default Landing;
