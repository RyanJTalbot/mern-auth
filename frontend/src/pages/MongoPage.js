import React from 'react';
import MongoCards from '../components/flashcards/MongoCards';
import NextQuestion from '../components/flashcards/NextQuestion';
import NavbarUser from '../components/layout/NavbarUser';
import Footer from '../components/Footer';

class MongoPage extends React.Component {
	render() {
		return (
			<div className='card-page'>
				<NavbarUser />
				<MongoCards />
				<NextQuestion />
				<Footer />
			</div>
		);
	}
}

export default MongoPage;
