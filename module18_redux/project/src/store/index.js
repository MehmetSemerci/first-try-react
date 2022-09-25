import { createStore } from 'redux';

const initialState = {
	counter: 0,
	showCounter: true,
};

const counterReducer = (state = initialState, action) => {
	if (action.type === 'INCR') {
		return {
			...state,
			counter: state.counter + Number(action.value),
		};
	}

	if (action.type === 'DECR') {
		return {
			...state,
			counter: state.counter - Number(action.value),
		};
	}

	if (action.type === 'TOOGLE_VISIBLE') {
		return {
			...state,
			showCounter: !state.showCounter,
		};
	}

	return state;
};

const store = createStore(counterReducer);

export default store;
