import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredToHeartLocal } from '../../Utility/productAddToLocal';
import Wish from '../Wish/Wish';
import { toast } from 'react-toastify';

const WishList = props => {
    const allProduct = useLoaderData();
    const [wishes, setWishes] = useState([]);

    useEffect(() => {
        const storedWishList = getStoredToHeartLocal()
        const wishList = [...allProduct].filter(product => storedWishList.includes(product.product_id));
        setWishes(wishList);
    },[allProduct])

    // handle remove wish list
    const handleRemoveWishCart = product_id => {
        const removeWishCart = wishes.filter(wish => wish.product_id !== product_id);
        setWishes(removeWishCart);
        toast.info('Remove this Wish to Wish List!!');
    }
    return (
        <div className='my-5 max-w-6xl mx-auto'>
             <div className='flex justify-between items-center text-center mt-5'>
                <h3 className="text-2xl font-bold">WishList</h3>
            </div>
            {
                wishes.map((wish, idx) => <Wish 
                handleRemoveWishCart={handleRemoveWishCart}
                key={idx} wish={wish}></Wish>)
            }
        </div>
    );
};

WishList.propTypes = {
    props: PropTypes
};

export default WishList;