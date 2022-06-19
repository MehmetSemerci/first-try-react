import React, { useRef } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isNotFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();
		const enteredName = nameInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredPostal = postalInputRef.current.value;
		const enteredCity = cityInputRef.current.value;

		const enteredNameValid = !isEmpty(enteredName);
		const enteredStreetNameValid = !isEmpty(enteredStreet);
		const enteredCityValid = !isEmpty(enteredCity);
		const enteredPostalCodeValid = !isNotFiveChars(enteredPostal);

		const formIsValid =
			enteredCityValid &&
			enteredNameValid &&
			enteredStreetNameValid &&
			enteredPostalCodeValid;

		if (formIsValid) {
			props.onConfirm({
				name: enteredName,
				street: enteredStreet,
				postalCode: enteredPostal,
				city: enteredCity,
			});
		}
	};

	return (
		<form onSubmit={confirmHandler}>
			<div className={classes.control}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' ref={nameInputRef}></input>
			</div>
			<div className={classes.control}>
				<label htmlFor='street'>Street </label>
				<input type='text' id='street' ref={streetInputRef}></input>
			</div>
			<div className={classes.control}>
				<label htmlFor='postal'>Postal Code</label>
				<input type='text' id='postal' ref={postalInputRef}></input>
			</div>
			<div className={classes.control}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' ref={cityInputRef}></input>
			</div>
			<div className={classes.actions}>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
