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
				<Navbar.Brand href='/'>RyanJT.dev | </Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='/'>Home | </Nav.Link>
					<Nav.Link href='/cards'> Flashcards |</Nav.Link>
					{/* <Nav.Link href='/reduxs'> Redux</Nav.Link> */}
				</Nav>
			</Navbar>
		);
	}
}
export default NavbarUser;
