import React from 'react';
import NodeCards from '../components/flashcards/NodeCards';
import NextQuestion from '../components/flashcards/NextQuestion';
import NavbarUser from '../components/layout/NavbarUser';
import Footer from '../components/Footer';

class NodePage extends React.Component {
	render() {
		return (
			<div className='card-page'>
				<NavbarUser />
				<NodeCards />
				<NextQuestion />
				<Footer />
			</div>
		);
	}
}

export default NodePage;
