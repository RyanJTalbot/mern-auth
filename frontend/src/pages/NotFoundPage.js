import React from 'react';
import Footer from '../components/Footer';
import Navbarz from '../components/layout/Navbarz';

class ExpressPage extends React.Component {
	render() {
		return (
			<div className='card-page'>
				<Navbarz />
				<div
					style={{
						textAlign: 'center',
						fontSize: '5rem',
						paddingTop: '14rem',
						textDecoration: 'underline',
						fontFamily: 'permanent marker',
					}}
				>
					Page Not Found!
				</div>

				<Footer />
			</div>
		);
	}
}

export default ExpressPage;
