import React from 'react';
import ReduxCards from '../components/flashcards/ReduxCards';
import NextQuestion from '../components/flashcards/NextQuestion';
import NavbarUser from '../components/layout/NavbarUser';

class ReduxPage extends React.Component {
	render() {
		return (
			<div className='card-page'>
				<NavbarUser />
				<ReduxCards />
				<NextQuestion />
			</div>
		);
	}
}

export default ReduxPage;
