import React, { Fragment } from 'react';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './styles.css';

export default ({ children }) => (
	<Fragment>
		<Header />
		<Content>{children}</Content>
		<Footer />
	</Fragment>
);
