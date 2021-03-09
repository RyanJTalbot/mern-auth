import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div className='navbar-fixed'>
				<nav className='z-depth-0'>
					<div className='nav-wrapper white'>
						<Link
							to='/'
							style={{
								fontFamily: 'monospace',
							}}
							className='col s3 brand-logo center black-text'
						>
							<i className='material-icons'>code</i>
							MERN FLASHCARDS
						</Link>
						<Link
							to='/cards'
							style={{
								fontSize: 34,
								fontFamily: 'monospace',
							}}
							className='col s3 offset-s3 black-text '
						>
							| Flashcards
						</Link>
						{/* <Link
							to='/redux'
							style={{
								fontSize: 34,
								fontFamily: 'monospace',
							}}
							className='col s3 offset-s3 black-text '
						>
							Redux
						</Link> */}
					</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;
