import { createSlice } from '@reduxjs/toolkit';

const initalState = {
	isShown: false,
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initalState,
	reducers: {
		toggle(state) {
			state.isShown = !state.isShown;
		},
		showCart(state) {
			state.isShown = true;
		},
		hideCart(state) {
			state.isShown = false;
		},
		removeItem(state, action) {
			const items = state.items;
			items.forEach((item) => {
				if (action.payload.title === item.title) {
					if (item.quantity > 1) {
						item.quantity -= 1;
						item.total = item.quantity * item.price;
					} else {
						items.splice(items.indexOf(item), 1);
					}
				}
			});
			state.items = items;
		},
		addItem(state, action) {
			const items = state.items;
			let isFound = false;
			items.forEach((item) => {
				if (action.payload.title === item.title) {
					item.quantity += 1;
					item.total = item.quantity * item.price;
					isFound = true;
				}
			});
			if (!isFound) {
				items.push({
					title: action.payload.title,
					quantity: 1,
					price: action.payload.price,
					total: action.payload.price,
				});
			}
		},
	},
});

export default cartSlice;
