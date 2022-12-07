import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Max', text: 'asdasdasdas' },
	{ id: 'q2', author: 'asd', text: 'asdasdgdfghdfgdfasdas' },
];

const ViewQuotes = () => {
	return (
		<>
			<QuoteList quotes={DUMMY_QUOTES}></QuoteList>
		</>
	);
};

export default ViewQuotes;
