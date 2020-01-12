import React from 'react';

import Layout from './layout';
import Pages from './pages';

import Messages from './components/Messages';

export default function App() {
	return (
		<Layout>
			<Messages />
			<Pages />
		</Layout>
	);
}
