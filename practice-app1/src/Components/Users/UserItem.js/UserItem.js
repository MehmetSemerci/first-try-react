import React from 'react';
import Card from '../../UI/Card/Card';

import * as styles from './UserItem.module.css';

const UserItem = (props) => {
	function deleteHandler() {
		props.onDelete(props.id);
	}

	return (
		<div>
			<Card onClick={deleteHandler} className={styles['user-item']}>
				{props.name} {props.age} years old.
			</Card>
		</div>
	);
};

export default UserItem;
