import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const AddQuote = () => {
	const history = useHistory();

	const addQuoteHandler = (data) => {
		alert(data.text);

		history.replace('/view');
	};

	return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default AddQuote;
