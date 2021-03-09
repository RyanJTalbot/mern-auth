import React from 'react';
import { Button } from 'react-bootstrap';

function NextQuestion() {
	function refreshPage() {
		window.location.reload(false);
	}
	return (
		<div className='container'>
			<div className='row'>
				<div className='col s12'>
					<Button
						className='waves-effect  blue waves-dark btn-large'
						onClick={refreshPage}
					>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}

export default NextQuestion;
