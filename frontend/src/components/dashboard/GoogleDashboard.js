import React from 'react';

class GoogleDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
		};
	}

	componentDidMount() {
		const data = JSON.parse(sessionStorage.getItem('userData'));
		let data1 = data;
		console.log(data1.data.Name);

		console.log(data1.Name);
		this.setState({ name: data1.data.Name });
	}
	render() {
		return (
			<div>
				<h1>welcome {this.state.name}</h1>
			</div>
		);
	}
}

export default GoogleDashboard;
