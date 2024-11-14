import PropTypes from 'prop-types';
import { RxCrossCircled } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { addCartToLocalStore } from '../../Utility/productAddToLocal';
import { useContext } from 'react';
import { CountContext } from '../Roots/Roots';
const Wish = ({ wish, handleRemoveWishCart }) => {
    const [count] = useContext(CountContext)
    const addToCart = product_id => {
        addCartToLocalStore(product_id)
    }

    const { product_image, product_title, description, price, product_id } = wish
    return (
        <div className='my-5 max-w-6xl mx-auto'>
            <div className={`bg-base-100 w-full shadow-xl rounded-2xl`}>
                <div className="flex justify-between items-center p-4">
                    <div className=' flex gap-4'>
                        <img className='image-container bg-cover h-[150px] rounded-2xl' src={product_image} alt="" />
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-3xl'>{product_title}</h3>
                            <h3 className='text-gray-500 '>{description}</h3>
                            <h3 className='font-bold pb-3'>Price: {price}$</h3>
                            <div>
                                <button
                                    onClick={() => addToCart(product_id)}
                                    className="btn btn-active bg-[#9538E2] text-white rounded-full">Add To Cart <FaShoppingCart></FaShoppingCart></button>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => handleRemoveWishCart(product_id)}
                        className=' text-red-500 rounded-full text-3xl'><RxCrossCircled></RxCrossCircled></button>
                </div>

            </div>
        </div>
    );
};

Wish.propTypes = {
    props: PropTypes
};

export default Wish;