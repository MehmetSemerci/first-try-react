import React from 'react';
import UserItem from '../UserItem.js/UserItem';

const UserList = (props) => {
	return (
		<ul>
			{props.items.map((user) => (
				<UserItem
					key={user.id}
					id={user.id}
					name={user.name}
					age={user.age}
                    onDelete={props.onDeleteUser}
				></UserItem>
			))}
		</ul>
	);
};

export default UserList;
