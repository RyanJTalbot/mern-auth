import React from 'react';
import Flashcards from '../components/flashcards/Flashcards';
import NextQuestion from '../components/flashcards/NextQuestion';
import NavbarUser from '../components/layout/NavbarUser';

class FcardPage extends React.Component {
	render() {
		return (
			<div className='card-page'>
				<NavbarUser />
				<Flashcards />
				<NextQuestion  />
			</div>
		);
	}
}

export default FcardPage;
