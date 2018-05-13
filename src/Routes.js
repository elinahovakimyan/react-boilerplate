import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './containers/HomePage';
import CoursePage from './containers/CoursePage';
import NotFound from './components/NotFound';

class Routes extends Component {
	render() {
		return(
			<Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursePage} />
  			<Route component={NotFound} />
      </Switch>
		);
	}
}

export default Routes;
