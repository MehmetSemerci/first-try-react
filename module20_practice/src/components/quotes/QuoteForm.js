import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
	const authorInputRef = useRef();
	const textInputRef = useRef();
	const [focused, setFocused] = useState(false);

	function submitFormHandler(event) {
		event.preventDefault();

		const enteredAuthor = authorInputRef.current.value;
		const enteredText = textInputRef.current.value;

		// optional: Could validate here

		props.onAddQuote({ author: enteredAuthor, text: enteredText });
	}

	const clickHandler = () => {
		setFocused(false);
	};

	const focusHandler = () => {
		setFocused(true);
	};

	return (
		<>
			<Prompt
				when={focused}
				message={(location) => 'Your work will be lost!'}
			/>
			<Card>
				<form
					onFocus={focusHandler}
					className={classes.form}
					onSubmit={submitFormHandler}
				>
					{props.isLoading && (
						<div className={classes.loading}>
							<LoadingSpinner />
						</div>
					)}

					<div className={classes.control}>
						<label htmlFor='author'>Author</label>
						<input type='text' id='author' ref={authorInputRef} />
					</div>
					<div className={classes.control}>
						<label htmlFor='text'>Text</label>
						<textarea id='text' rows='5' ref={textInputRef}></textarea>
					</div>
					<div className={classes.actions}>
						<button onClick={clickHandler} className='btn'>
							Add Quote
						</button>
					</div>
				</form>
			</Card>
		</>
	);
};

export default QuoteForm;
