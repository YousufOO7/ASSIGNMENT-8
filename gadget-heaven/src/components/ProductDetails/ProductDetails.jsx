import PropTypes from 'prop-types';
import { useLoaderData,  useParams } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { addCartToLocalStore, addHeartToLocalStore } from '../../Utility/productAddToLocal';
import { useState } from 'react';

const ProductDetails = props => {


    const { product_id } = useParams();
    const data = useLoaderData();
    const [isActiveCart, setIsActiveCart] = useState(false);
    // add to card handle
    const addToCart = (product_id) => {
        addCartToLocalStore(product_id);
        setIsActiveCart(true);
    }

    // add to heart handle
    const addToHeart = product_id => {
        addHeartToLocalStore(product_id);
    }

    const product = data.find(product => product.product_id === product_id);
    const { product_image, product_title, price, availability, description, specifications, rating } = product;

    return (
        <div className={`pb-[500px]`}>
            {/* text */}
            <div className="hero bg-[#9538E2] pt-10 pb-48 relative">
                <div className='text-center items-center'>
                    <h1 className="text-3xl font-bold text-white w-5/6 mx-auto">Product Details</h1>
                    <p className="py-6 w-5/6 mx-auto text-white text-xs opacity-70">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            {/* Details card */}
            <div className="hero bg-white border-2 p-4 max-w-5xl mx-auto absolute top-[250px] ml-40 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="max-w-md bg-base-200 rounded-2xl mr-10 h-[500px] p-4" />
                    <div>
                        <h1 className="text-4xl font-bold">{product_title}</h1>
                        <p className="pt-6 pb-2 font-bold">Price: ${price}</p>
                        <button className="btn btn-outline btn-success rounded-full btn-xs">{`${availability ? "In Stock" : "Stock Out"}`}</button>
                        <p className='font-thin py-6'>{description}</p>
                        <p><b>specifications:</b></p>
                        <ul className='font-thin pt-2'>
                            {
                                specifications.map((item, idx) => <li key={idx}>{item}</li>)
                            }
                        </ul>
                        <p className='py-2'><b>Rating:</b></p>
                        <div className='flex  items-center gap-2 text-center'>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" />
                                <input type="radio" name="rating-1" className="mask mask-star bg-orange-400" defaultChecked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                            <button className='btn btn-xs'>{rating}</button>
                        </div>

                        <div className='py-5 flex gap-2'>
                            <div>
                                <button
                                    onClick={() => addToCart(product_id)}
                                    className=" bg-[#9538E2] text-white rounded-full btn" disabled={isActiveCart}>Add To Cart <FaShoppingCart></FaShoppingCart></button>
                            </div>
                            <div>
                                <button
                                    onClick={() => addToHeart(product_id)}
                                    className="btn rounded-full text-xl"><CiHeart></CiHeart></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductDetails.propTypes = {
    props: PropTypes
};

export default ProductDetails;