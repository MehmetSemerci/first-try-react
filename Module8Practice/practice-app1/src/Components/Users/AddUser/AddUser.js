import React from 'react';
import { useState } from 'react';

import Card from '../../UI/Card/Card';
import styles from './AddUser.module.css';
import Button from '../../UI/Button/Button';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const addUserHandler = (event) => {
		event.preventDefault();
		if (!enteredUsername || enteredUsername.trim().length === 0) {
			props.onError({ title: 'Error!', message: 'Username cannot be empty!' });
			return;
		}
		if (!enteredAge || +enteredAge < 1) {
			props.onError({ title: 'Error!', message: 'Please enter valid age!' });
			return;
		}
		props.onUserInsert({
			name: enteredUsername,
			age: enteredAge,
			id: Math.random(),
		});
		setEnteredUsername('');
		setEnteredAge('');
		return;
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<Card className={styles.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor='username'>Username</label>
				<input
					id='username'
					type='text'
					onChange={usernameChangeHandler}
					value={enteredUsername}
				/>
				<label htmlFor='age'>Age (Years)</label>
				<input
					id='age'
					type='number'
					onChange={ageChangeHandler}
					value={enteredAge}
				/>
				<Button type='submit'>Add User</Button>
			</form>
		</Card>
	);
};

export default AddUser;
