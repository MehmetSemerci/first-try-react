import { createSlice } from '@reduxjs/toolkit';

const counterInitialState = {
	counter: 0,
	showCounter: true,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: counterInitialState,
	reducers: {
		increment(state, action) {
			state.counter += Number(action.payload.value);
		},
		decrement(state, action) {
			state.counter -= Number(action.payload.value);
		},
		toggleVisibility(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

export default counterSlice;
