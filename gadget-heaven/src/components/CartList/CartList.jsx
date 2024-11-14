import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getStoredToCartLocal } from '../../Utility/productAddToLocal';
import Cart from '../Cart/Cart';
import modalImage from '../../assets/images/Group.png'
import { toast } from 'react-toastify';
import { TbSortDescendingNumbers } from "react-icons/tb";


const CartList = props => {
    const allProduct = useLoaderData();
    const [carts, setCarts] = useState([]);
    const [sort, setSort] = useState('');
    const navigate = useNavigate();
    const [modalTotalCost, setModalTotalCost] = useState(0);
    useEffect(() => {
        const storedCartList = getStoredToCartLocal();
        const cartList = [...allProduct].filter(product => storedCartList.includes(product.product_id));
        setCarts(cartList);
    }, [allProduct])

    const totalCost = [...carts].reduce((total, cart) => total + cart.price, 0);

    const handleRemoveCarts = () => {
        setModalTotalCost(totalCost);
        document.getElementById('my_modal_1').showModal();
        setCarts([]);
    }

    const handleRemovePrice = () => {
        navigate('/');
    }

    // handle remove cart
    const handleRemoveCart = product_id => {
        const removeCart = carts.filter(cart => cart.product_id !== product_id);
        setCarts(removeCart);
        toast.info('Remove this cart from Cart List');
    };

    const handleSortType = (sortType) => {
        setSort(sortType);
        const sortedCarts = [...carts].sort((a, b) => {
            return sortType === 'asc' ? a.price - b.price : b.price - a.price;
        });
        setCarts(sortedCarts);
    };

    return (
        <div className='my-5 max-w-6xl mx-auto'>
            <div className='flex justify-between items-center text-center mt-5'>
                <h3 className="text-2xl font-bold">Cart</h3>
                <div className='flex items-center text-center gap-5'>
                    <b><b>Total Cost:</b> {totalCost.toFixed(2)}</b>
                    <button onClick={() => handleSortType(sort === 'asc' ? 'desc' : 'asc')} className="btn btn-outline text-[#9538E2] bg-white rounded-full">
                        Sort by Price
                        <TbSortDescendingNumbers></TbSortDescendingNumbers>
                    </button>
                    <button
                        onClick={handleRemoveCarts}
                        className='btn bg-[#9538E2] text-white rounded-full'>Purchase</button>
                </div>
            </div>
            {
                carts.map((cart, idx) => <Cart
                    handleRemoveCart={handleRemoveCart}
                    key={idx} cart={cart}></Cart>)
            }

            {/* modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div>
                        <img className='mx-auto pb-4' src={modalImage} alt="" />
                    </div>
                    <div className='text-center'>
                        <h3 className="font-bold text-2xl">Payment Successfully</h3>
                        <p className="pt-4 pb-2 font-thin">Thanks for purchasing</p>
                        <p className="pb-4 font-thin">Total: {modalTotalCost.toFixed(2)}</p>
                    </div>
                    <div className="">
                        <form method="dialog">
                            <button
                                onClick={handleRemovePrice}
                                className="btn w-full font-bold">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


        </div>
    );
};

CartList.propTypes = {
    props: PropTypes
};

export default CartList;