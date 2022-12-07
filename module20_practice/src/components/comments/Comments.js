import { useState } from 'react';
import { useParams } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
	const params = useParams();
	const [isAddingComment, setIsAddingComment] = useState(false);

	const startAddCommentHandler = () => {
		setIsAddingComment(true);
	};

	return (
		<section className={classes.comments}>
			<h2>User Comments for {params.quoteId}</h2>
			{!isAddingComment && (
				<button className='btn' onClick={startAddCommentHandler}>
					Add a Comment
				</button>
			)}
			{isAddingComment && <NewCommentForm />}
			<p>Comments...</p>
		</section>
	);
};

export default Comments;
