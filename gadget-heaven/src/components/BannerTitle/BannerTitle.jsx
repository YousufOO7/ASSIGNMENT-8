import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BannerTitle = props => {
    const navigate = useNavigate();
    return (
        <div className="hero bg-[#9538E2] pt-10 px-32 pb-48 rounded-b-2xl max-w-7xl mx-auto relative">
            <div className='text-center items-center'>
                <h1 className="text-5xl font-bold text-white w-5/6 mx-auto">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="py-6 w-4/6 mx-auto text-white opacity-70">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button
                    onClick={() => navigate("/dashboard")}
                    className="btn bg-white text-[#9538E2] rounded-full font-bold">Shop Now</button>
            </div>
        </div>
    );
};

BannerTitle.propTypes = {
    props: PropTypes
};

export default BannerTitle;