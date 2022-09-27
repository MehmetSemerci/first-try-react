import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { counterActions } from '../store/index.js';
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);

	const [quantity, setQuantity] = useState(1);

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleVisibility());
	};

	const inputChangeHandler = (event) => {
		setQuantity(event.target.value);
	};

	const incrementHandler = () => {
		dispatch(counterActions.increment({ value: quantity }));
	};

	const decrementHandle = () => {
		dispatch(counterActions.decrement({ value: quantity }));
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<input
				type='number'
				id='quantity'
				name='quantity'
				value={quantity}
				onChange={inputChangeHandler}
				defaultValue={1}
			/>
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandle}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
