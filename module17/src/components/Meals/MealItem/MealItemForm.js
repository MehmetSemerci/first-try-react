import React from 'react';
import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmountNumber);
	};

	return (
		<FormControl className={classes.form}>
			<Input
				ref={amountInputRef}
				label='Amount'
				input={{
					id: 'amount',
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<Button
				variant='outlined'
				startIcon={<ShoppingBasketIcon />}
				onClick={submitHandler}
			>
				Add To Cart
			</Button>
			{!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
		</FormControl>
	);
};

export default MealItemForm;
