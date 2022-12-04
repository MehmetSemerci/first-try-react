import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				<ProductItem
					title='The Best Offer'
					price={6}
					description='A good movie!'
				/>
				<ProductItem
					title='Miss Sloane'
					price={7}
					description='Another good movie!'
				/>
			</ul>
		</section>
	);
};

export default Products;
