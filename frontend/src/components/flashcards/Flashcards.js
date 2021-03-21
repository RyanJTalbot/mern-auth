import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function FlashCards() {
	// useState Hooks
	const [choiced, setChoices] = useState([]);
	const [showAns, setShowAns] = useState(false);

	// Axios async connection to backend
	const getChoices = async () => {
		try {
			const daChoice = await axios.get('http://localhost:8000/cards');

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
		<Container className='container' >
			{/* Question from MongoDB */}
			<Row>
				<Col style={{ marginTop:'6rem', textAlign:'center'}}>
					{choiced.map((choiceds) => (
						<h3 key={choiceds._id}>{choiceds.question}</h3>
					))}
				</Col>
			</Row>

			{/* Choices from MongoDB */}

			<Row>
				<Col style={{ marginTop:'4rem'}}>
					{choiced.map((choiceds) => (
						<Button variant='outline-dark' size='lg' block key={choiceds._id}>
							A. {choiceds.choiceA}
						</Button>
					))}
				</Col>
			</Row>

			<Row >
				<Col >
					{choiced.map((choiceds) => (
						<Button variant='outline-dark' size='lg' block key={choiceds._id}>
							B. {choiceds.choiceB}
						</Button>
					))}
				</Col>
			</Row>

			<Row>
				<Col>
					{choiced.map((choiceds) => (
						<Button variant='outline-dark' size='lg' block key={choiceds._id}>
							C. {choiceds.choiceC}
						</Button>
					))}
				</Col>
			</Row>
			<Row>
				<Col>
					{choiced.map((choiceds) => (
						<Button variant='outline-dark' size='lg' block key={choiceds._id}>
							D. {choiceds.choiceD}
						</Button>
					))}
				</Col>
			</Row>
			<br />
			{/* Show Answer Button */}
			<Row>
				<Col>
					<Button
						variant='secondary'
						size='lg'
						block
						onClick={() => setShowAns(!showAns)}
					>
						Answer
					</Button>

					{showAns && (
						<div className='ans' style={{textAlign:'center', fontSize:'8rem'}}>
							{choiced.map((choiceds) => (
								<h2 key={choiceds._id}>{choiceds.answer}</h2>
							))}
						</div>
					)}
				</Col>
			</Row>
		</Container>
	);
}
