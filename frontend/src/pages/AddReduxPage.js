import React from 'react';
import NavbarUser from '../components/layout/NavbarUser';
import CreateReduxCard from '../components/flashcards/CreateReduxCard';
import Footer from '../components/Footer';

class FcardPage extends React.Component {
	render() {
		return (
			<div className='card-page'>
				<NavbarUser />
				<CreateReduxCard />
				<Footer />
			</div>
		);
	}
}

export default FcardPage;
