import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Max', text: 'asdasdasdas' },
	{ id: 'q2', author: 'asd', text: 'asdasdgdfghdfgdfasdas' },
];

const ViewQuote = () => {
	const params = useParams();
	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return <p>No quote found with id {params.quoteId}</p>;
	}

	return (
		<>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path={`/view/:quoteId/comments`}>
				<Comments></Comments>
			</Route>
		</>
	);
};

export default ViewQuote;
