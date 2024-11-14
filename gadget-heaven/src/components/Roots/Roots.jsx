import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { createContext } from 'react';
export const CountContext = createContext(0);
const Roots = props => {
    return (
       <CountContext.Provider>
         <div >
            <div ><Navbar></Navbar></div>
            <div className=' min-h-[calc(100vh-288px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
       </CountContext.Provider>
    );
};

Roots.propTypes = {
    props: PropTypes
};

export default Roots;