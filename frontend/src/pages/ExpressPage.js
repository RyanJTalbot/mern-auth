import React from 'react';
import ExpressCards from '../components/flashcards/ExpressCards';
import NextQuestion from '../components/flashcards/NextQuestion';
import NavbarUser from '../components/layout/NavbarUser';
import Footer from '../components/Footer';

class ExpressPage extends React.Component {
	render() {
		return (
			<div className='card-page'>
				<NavbarUser />
				<ExpressCards />
				<NextQuestion />
				<Footer />
			</div>
		);
	}
}

export default ExpressPage;
