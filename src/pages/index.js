import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Add from './Add';
import List from './List';
import Cart from './Cart';
import Login from './Login';

function PrivateRoute({ component: Component, ...rest }) {
	const { isAuthenticated } = useSelector((state) => state.auth);

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuthenticated ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)}
		/>
	);
}

export default () => (
	<Switch>
		<Route path="/list" component={List} />
		<PrivateRoute path="/add" component={Add} />
		<Route path="/cart" component={Cart} />
		<Route path="/login" component={Login} />
		<Redirect path="/" to="/list" />
	</Switch>
);
