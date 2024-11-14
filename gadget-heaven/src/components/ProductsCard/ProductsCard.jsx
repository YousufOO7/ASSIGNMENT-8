import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import Product from '../Product';
import { useEffect, useState } from 'react';

const ProductsCard = props => {
    const data = useLoaderData();

    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(product => product.category === category)
            setProducts(filterByCategory);
        }
        else {
            setProducts(data)
        }
    }, [data, category])
    return (
        <div>
            {
                products.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
                        {
                            products.map((product, idx) => <Product key={idx} product={product}></Product>)
                        }
                    </div>
                ) : (
                    <div>
                        <p className="text-5xl font-bold text-[#9538E2]">No Data Found</p>
                    </div>
                )
            }
        </div>
    );
};


ProductsCard.propTypes = {
    props: PropTypes
};

export default ProductsCard;