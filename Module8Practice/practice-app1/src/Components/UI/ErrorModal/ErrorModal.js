import React from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';

import styles from './ErrorModal.module.css';

function ErrorModal(props) {
	return (
		<div>
			<div className={styles.backdrop} />
			<Card className={styles.modal}>
				<header>
					<h2 className={styles.header}>{props.title}</h2>
				</header>
				<div className={styles.content}>
					<p>{props.message}</p>
				</div>
				<footer className={styles.actions}>
					<Button onClick={props.onClick}>Okay</Button>
				</footer>
			</Card>
		</div>
	);
}

export default ErrorModal;
