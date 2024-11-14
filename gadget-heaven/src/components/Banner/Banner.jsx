import PropTypes from 'prop-types';
import bannerImg from '../../assets/images/banner.jpg'

const Banner = props => {
    return (
        <div className="hero bg-white border-2 p-4 max-w-2xl mx-auto absolute top-[400px] ml-80 rounded-2xl">
            <img className='h-[450px] rounded-2xl' src={bannerImg} alt="" />
        </div>
    );
};

Banner.propTypes = {
    props: PropTypes
};

export default Banner;