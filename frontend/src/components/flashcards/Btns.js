import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Btns extends Component {
	constructor() {
		super();

		this.state = {
			butn: true,
		};
	}

	handleClick() {
		this.setState({
			butn: !this.state.button,
		});
	}

	render() {
		let btn_class = this.state.butn
			? "'variant='outline-secondary' size='lg' block'"
			: "variant='secondary' size='lg' block";
		return (
			<div>
				<Button
					className={btn_class}
					onclick={this.handleClick.bind.bind(this)}
				>
					{this.props.choiceds.choiceA}
				</Button>
			</div>
		);
	}
}

export default Btns;
