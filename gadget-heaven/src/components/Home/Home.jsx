import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import BannerTitle from '../BannerTitle/BannerTitle';
import Gadgets from '../Gadgets/Gadgets';

const Home = props => {
    return (
        <div className='bg-gray-200'>  
            <BannerTitle></BannerTitle>
           <Banner></Banner>
           <Gadgets></Gadgets>
        </div>
    );
};

Home.propTypes = {
    props: PropTypes
};

export default Home;