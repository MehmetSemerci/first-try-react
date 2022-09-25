import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);

	const [quantity, setQuantity] = useState(1);

	const toggleCounterHandler = () => {
		dispatch({ type: 'TOOGLE_VISIBLE' });
	};

	const inputChangeHandler = (event) => {
		setQuantity(event.target.value);
	};

	const incrementHandler = () => {
		dispatch({ type: 'INCR', value: quantity });
	};

	const decrementHandle = () => {
		dispatch({ type: 'DECR', value: quantity });
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
