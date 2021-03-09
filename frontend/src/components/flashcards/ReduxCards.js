import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

export default function ReduxCards() {
	// useState Hooks
	const [choiced, setChoices] = useState([]);
	const [showAns, setShowAns] = useState(false);

	// Axios async connection to backend
	const getChoices = async () => {
		try {
			const daChoice = await axios.get('http://localhost:8000/redux');

			// Set Data
			setChoices(daChoice.data);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getChoices();
	}, []);

	return (
		<div className='container'>
			{/* Question from MongoDB */}
			<div className='row'>
				<div className='col s12'>
					{choiced.map((choiceds) => (
						<h3 key={choiceds._id}>{choiceds.question}</h3>
					))}
				</div>
			</div>

			{/* Choices from MongoDB */}
			<div className='row'>
				<div className='row'>
					<div className='col s12'>
						{choiced.map((choiceds) => (
							<Button
								className='waves-effect waves-light btn-large'
								block
								key={choiceds._id}
							>
								A. {choiceds.choiceA}
							</Button>
						))}
					</div>
				</div>
				<div className='row'>
					<div className='col s12'>
						{choiced.map((choiceds) => (
							<Button
								className='waves-effect waves-light btn-large'
								block
								key={choiceds._id}
							>
								B. {choiceds.choiceB}
							</Button>
						))}
					</div>
				</div>
				<div className='row'>
					<div className='col s12'>
						{choiced.map((choiceds) => (
							<Button
								className='waves-effect waves-light btn-large btn btn-block'
								block
								key={choiceds._id}
							>
								C. {choiceds.choiceC}
							</Button>
						))}
					</div>
				</div>
				<div className='row'>
					<div className='col s12'>
						{choiced.map((choiceds) => (
							<Button
								className='waves-effect waves-light btn-large'
								key={choiceds._id}
							>
								D. {choiceds.choiceD}
							</Button>
						))}
					</div>
				</div>
			</div>

			{/* Show Answer Button */}
			<div className='row'>
				<div className='col s12'>
					<Button
						className='waves-effect waves-light blue-grey  btn-large'
						onClick={() => setShowAns(!showAns)}
					>
						Answer
					</Button>
					{showAns && (
						<div className='ans'>
							{choiced.map((choiceds) => (
								<h2 key={choiceds._id}>{choiceds.answer}</h2>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
