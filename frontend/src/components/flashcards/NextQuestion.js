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
					<Button variant='outline-dark' block size='lg' onClick={refreshPage}>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
}

export default NextQuestion;
