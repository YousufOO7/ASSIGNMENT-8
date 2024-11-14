import PropTypes from 'prop-types';
import CartList from '../CartList/CartList';
import WishList from '../WishList/WishList';
import './Dashboard.css';
import { useState } from 'react';

const Dashboard = props => {
    const [isActive, setIsActive] = useState({ product: true, status: 'Cart' })

    const handleActive = status => {
        if (status === 'Cart') {
            setIsActive({ product: true, status: 'Cart' })
        }
        else {
            setIsActive({ product: false, status: 'WishList' })
        }
    }
    return (
        <div>
            <div className="hero bg-[#9538E2] pt-10 px-32 pb-20  mx-auto">
                <div className='text-center items-center'>
                    <h1 className="text-5xl font-bold text-white w-5/6 mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6 w-4/6 mx-auto text-white opacity-70">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className='space-x-5'>
                        <button
                            onClick={() => handleActive("Cart")}
                            className={`${isActive.product ? 'btn btn-outline activeCarts' : 'btn btn-outline'} rounded-full text-white`}>Cart</button>
                        <button
                            onClick={() => handleActive('wishList')}
                            className={`${isActive.product ? 'btn btn-outline' : 'btn btn-outline activeCarts'} rounded-full text-white`}>WishList</button>
                    </div>
                </div>
            </div>
            <div>
                <div className={`${isActive.product ? "" : "hidden"}`}><CartList></CartList></div>
                <div className={`${isActive.product ? "hidden" : ""}`}><WishList></WishList></div>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    props: PropTypes
};

export default Dashboard;