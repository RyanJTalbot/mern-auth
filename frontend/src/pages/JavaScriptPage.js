import React from 'react';
import JavaScriptCards from '../components/flashcards/JavaScriptCards';
import NextQuestion from '../components/flashcards/NextQuestion';
import NavbarUser from '../components/layout/NavbarUser';
import Footer from '../components/Footer';

class JavaScriptPage extends React.Component {
	render() {
		return (
			<div className='card-page'>
				<NavbarUser />
				<JavaScriptCards />
				<NextQuestion />
				<Footer />
			</div>
		);
	}
}

export default JavaScriptPage;
