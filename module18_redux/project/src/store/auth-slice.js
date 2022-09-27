import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
	username: '',
	password: '',
	loggedIn: false,
	formVisible: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: authInitialState,
	reducers: {
		login(state, action) {
			state.username = action.payload.username;
			state.password = action.payload.password;
			state.loggedIn = true;
		},
		logout(state) {
			state.username = '';
			state.password = '';
			state.loggedIn = false;
		},
		hideForm(state) {
			state.formVisible = false;
		},
		showForm(state) {
			state.formVisible = true;
		},
	},
});

export default authSlice;
