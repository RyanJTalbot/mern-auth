import React from 'react';
import ReactCards from '../components/flashcards/ReactCards';
import NextQuestion from '../components/flashcards/NextQuestion';
import NavbarUser from '../components/layout/NavbarUser';
import Footer from '../components/Footer';

class ReactPage extends React.Component {
	render() {
		return (
			<div className='card-page'>
				<NavbarUser />
				<ReactCards />
				<NextQuestion />
				<Footer />
			</div>
		);
	}
}

export default ReactPage;
