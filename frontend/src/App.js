import React, { Component } from 'react';
import {
	BrowserRouter,
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser, googleUser } from './actions/authActions';
import queryString from 'query-string';
import { Provider } from 'react-redux';
import store from './store';

import NodePage from './pages/NodePage';
import MongoPage from './pages/MongoPage';
import ReactPage from './pages/ReactPage';
import NPMPage from './pages/NPMPage';
import JavaScriptPage from './pages/JavaScriptPage';
import ExpressPage from './pages/ExpressPage';
import ReduxPage from './pages/ReduxPage';
import FcardPage from './pages/FcardPage';

import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import NotFoundPage from './pages/NotFoundPage';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	store.dispatch(googleUser(decoded));

	// Check for expired token
	const currentTime = Date.now() / 1000;

	// to get in milliseconds
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Redirect to login
		window.location.href = './login';
	}
}

class App extends Component {
	UNSAFE_componentWillMount() {
		var query = queryString.parse(this.props.location.search);

		if (query.token) {
			window.localStorage.setItem('jwt', query.token);
			this.props.history.push('/dashboard');
		}
		// if (this.props.clientId) {
		// 	window.localStorage.setItem('jwt', query.token);
		// 	this.props.history.push('/dashboard');
		// }
	}

	// <switch>
	// {false && <route path="/secure*"/>}
	// <route path="/notsecure"/>
	// </switch>

	// Swap out false with some variable that gets set after auth validation occurs

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className='App'>
						<Switch>
							<Route exact path='/' component={Landing} />
							<Route exact path='/register' component={Register} />
							<Route exact path='/login' component={Login} />

							<PrivateRoute exact path='/dashboard' component={Dashboard} />
							<PrivateRoute exact path='/cards' component={FcardPage} />
							<PrivateRoute exact path='/reduxs' component={ReduxPage} />
							<PrivateRoute exact path='/expresses' component={ExpressPage} />
							<PrivateRoute exact path='/npms' component={NPMPage} />
							<PrivateRoute
								exact
								path='/javascripts'
								component={JavaScriptPage}
							/>
							<PrivateRoute exact path='/reacts' component={ReactPage} />
							<PrivateRoute exact path='/mongos' component={MongoPage} />
							<PrivateRoute exact path='/nodes' component={NodePage} />
							<Route component={NotFoundPage} />

							{/* To populate a new flashcards set use the following and change the Create Card */}

							{/* <PrivateRoute exact path='/add' component={CreateMongoCard} /> */}
							<Route component={NotFoundPage} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}
export default App;
