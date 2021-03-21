import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Navbarz extends Component {
	render() {
		return (
			<Navbar bg='light' variant='light' style={{fontSize:'2rem'}}>
				<Navbar.Brand href='/'>RyanJT.dev | </Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='/'>Home</Nav.Link>
				</Nav>
			</Navbar>
		);
	}
}
export default Navbarz;
