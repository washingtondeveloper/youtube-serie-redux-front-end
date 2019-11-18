import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Add from './Add';
import List from './List';
import Cart from './Cart';

export default () => (
	<Switch>
		<Route path="/list" component={List} />
		<Route path="/add" component={Add} />
		<Route path="/cart" component={Cart} />
		<Redirect path="/" to="/list" />
	</Switch>
);
