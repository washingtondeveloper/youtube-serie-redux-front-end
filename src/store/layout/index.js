const INITIAL_STATE = {
	showMessage: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SHOW_MESSAGE':
			return { ...state, showMessage: true };
		case 'HIDE_MESSAGE':
			return { ...state, showMessage: false };
		default:
			return state;
	}
};

export const showMessage = () => {
	return {
		type: 'SHOW_MESSAGE'
	};
};

export const hideMessage = () => {
	return {
		type: 'HIDE_MESSAGE'
	};
};
