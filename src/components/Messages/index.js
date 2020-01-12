import React from 'react';

import Message from '../Message';
import { useSelector } from 'react-redux';

import './styles.css';

export default function Messages() {
	const { messages } = useSelector((state) => state.layout);

	return <div className="messages">{messages.map((mg, index) => <Message key={index} message={mg} />)}</div>;
}
