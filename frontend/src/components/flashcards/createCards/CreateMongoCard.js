import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, FormLabel, Button } from 'react-bootstrap';

export default class CreateMongoCard extends Component {
	constructor(props) {
		super(props);

		this.onChangeQuestion = this.onChangeQuestion.bind(this);
		this.onChangeChoiceA = this.onChangeChoiceA.bind(this);
		this.onChangeChoiceB = this.onChangeChoiceB.bind(this);
		this.onChangeChoiceC = this.onChangeChoiceC.bind(this);
		this.onChangeChoiceD = this.onChangeChoiceD.bind(this);
		this.onChangeAnswer = this.onChangeAnswer.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			_id: '',
			question: '',
			choiceA: '',
			choiceB: '',
			choiceC: '',
			choiceD: '',
			answer: '',
		};
	}

	// Axios GET
	componentDidMount() {
		axios
			.get('http://localhost:8000/mongos/')
			.then((response) => {
				if (response.data.length > 0) {
					this.setState({
						_id: response.data.map((id) => id.value),
					});
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// omChange handlers
	onChangeQuestion(e) {
		this.setState({
			question: e.target.value,
		});
	}

	onChangeChoiceA(e) {
		this.setState({
			choiceA: e.target.value,
		});
	}

	onChangeChoiceB(e) {
		this.setState({
			choiceB: e.target.value,
		});
	}

	onChangeChoiceC(e) {
		this.setState({
			choiceC: e.target.value,
		});
	}

	onChangeChoiceD(e) {
		this.setState({
			choiceD: e.target.value,
		});
	}

	onChangeAnswer(e) {
		this.setState({
			answer: e.target.value,
		});
	}

	//onSubmit
	onSubmit(e) {
		e.preventDefault();

		const mongo = {
			question: this.state.question,
			choiceA: this.state.choiceA,
			choiceB: this.state.choiceB,
			choiceC: this.state.choiceC,
			choiceD: this.state.choiceD,
			answer: this.state.answer,
		};

		console.log(mongo);

		// Axios POST /mongos/add
		axios
			.post('http://localhost:8000/mongos/add', mongo)
			.then((res) => console.log(res.data));

		window.location = '/';
	}

	render() {
		return (
			<Container>
				<h3>Create New Mongo Card</h3>
				<form onSubmit={this.onSubmit}>
					{/* Question */}
					<Row>
						<Col xs={12} md={8} xl={6}>
							<div className='form-group'>
								<FormLabel>Question: </FormLabel>
								<input
									required
									className='form-control lg'
									value={this.state.question}
									onChange={this.onChangeQuestion}
								/>
							</div>
						</Col>
					</Row>

					{/* Choices */}
					<div className='form-group'>
						<FormLabel>A. </FormLabel>
						<input
							required
							value={this.state.choiceA}
							onChange={this.onChangeChoiceA}
						/>
					</div>
					<div className='form-group'>
						<FormLabel>B. </FormLabel>
						<input
							required
							value={this.state.choiceB}
							onChange={this.onChangeChoiceB}
						/>
					</div>
					<div className='form-group'>
						<FormLabel>C. </FormLabel>
						<input
							required
							value={this.state.choiceC}
							onChange={this.onChangeChoiceC}
						/>
					</div>
					<div className='form-group'>
						<FormLabel>D. </FormLabel>
						<input
							required
							value={this.state.choiceD}
							onChange={this.onChangeChoiceD}
						/>
					</div>

					{/* Answer */}
					<div className='form-group'>
						<FormLabel>Answer: </FormLabel>
						<input
							required
							value={this.state.answer}
							onChange={this.onChangeAnswer}
						/>
					</div>

					{/* Submit Button */}
					<Button
						variant='secondary'
						className='form-group'
						as='input'
						type='submit'
						value='Submit'
					/>
				</form>
			</Container>
		);
	}
}
