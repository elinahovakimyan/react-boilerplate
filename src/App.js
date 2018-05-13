import React, { Component } from 'react';
// import { Header, Footer } from './common';
import { Link } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
	render() {
		return(
			<div>
				<Link to='/'>Home</Link>
				<Link to='/courses'>Courses</Link>

				<Routes />

			</div>
		)
	}
}

export default App;
