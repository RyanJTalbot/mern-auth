import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavbarUser extends Component {
	render() {
		return (
			<Navbar
				className='user-navbar'
				bg='light'
				variant='light'
				style={{ fontSize: '2rem' }}
			>
				<Navbar.Brand href='/dashboard'>RyanJT.dev | </Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='/dashboard'>Home | </Nav.Link>
					<Nav.Link href='/cards'> Flashcards |</Nav.Link>
					<Nav.Link href='/mongos'>
						{' '}
						<strong>M</strong>ongoDB |
					</Nav.Link>
					<Nav.Link href='/expresses'>
						{' '}
						<strong>E</strong>xpress |
					</Nav.Link>
					<Nav.Link href='/reacts'>
						{' '}
						<strong>R</strong>eact |
					</Nav.Link>
					<Nav.Link href='/nodes'>
						{' '}
						<strong>N</strong>ode |
					</Nav.Link>

					{/* <Nav.Link href='/javascripts'> JavaScript |</Nav.Link>
					<Nav.Link href='/npms'> NPM |</Nav.Link> */}
					{/* <Nav.Link href='/reduxs'> Redux |</Nav.Link> */}

					{/* when adding a new card set un-comment the following */}
					{/* <Nav.Link href='/add'> Add |</Nav.Link> */}
				</Nav>
			</Navbar>
		);
	}
}
export default NavbarUser;
