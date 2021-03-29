import React from 'react';
import NPMCards from '../components/flashcards/NPMCards';
import NextQuestion from '../components/flashcards/NextQuestion';
import NavbarUser from '../components/layout/NavbarUser';
import Footer from '../components/Footer';

class NPMPage extends React.Component {
	render() {
		return (
			<div className='card-page'>
				<NavbarUser />
				<NPMCards />
				<NextQuestion />
				<Footer />
			</div>
		);
	}
}

export default NPMPage;
