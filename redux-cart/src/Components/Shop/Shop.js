import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
	console.log(props);
	const { products, addToCart } = props;

	return (
		<div>
			<h4>This is Shop </h4>
			{products.map((pd) => <Product 
				product={pd} 
				key={pd.id}
				addToCart={addToCart} 
			/>)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		products: state.products
	};
};

const mapDispatchToProps = {
	addToCart: addToCart
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

export default connectToStore(Shop);
