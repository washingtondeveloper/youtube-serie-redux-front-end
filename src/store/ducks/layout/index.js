import { createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE = {
	messages: []
};

export const addMessage = createAction('ADD_MESSAGE');
export const removeMessage = createAction('REMOVE_MESSAGE');

export default createReducer(INITIAL_STATE, {
	[addMessage.type]: (state, action) => ({ ...state, messages: [ ...state.messages, action.payload ] }),
	[removeMessage.type]: (state, action) => ({
		...state,
		messages: state.messages.filter((mg) => mg !== action.payload)
	})
});
