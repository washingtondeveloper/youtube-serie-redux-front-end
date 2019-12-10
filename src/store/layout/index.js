const INITIAL_STATE = {
	showMessage: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case Types.SHOW_MESSAGE:
			return { ...state, showMessage: true };
		case Types.HIDE_MESSAGE:
			return { ...state, showMessage: false };
		default:
			return state;
	}
};

// Actions Types
export const Types = {
	SHOW_MESSAGE: 'SHOW_MESSAGE',
	HIDE_MESSAGE: 'HIDE_MESSAGE'
};

// Actions Creators
export const Creators = {
	showMessage: () => ({
		type: Types.SHOW_MESSAGE
	}),
	hideMessage: () => ({
		type: Types.HIDE_MESSAGE
	})
};
