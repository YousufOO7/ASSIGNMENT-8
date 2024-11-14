import PropTypes from 'prop-types';
import Categories from '../Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Gadgets = props => {
    const categories = useLoaderData()
    return (
        <div className='mt-[450px] mb-20'>
            <h2 className="text-5xl text-center font-bold">Explore Cutting-Edge Gadgets</h2>

            {/* Dynamic Gadget API */}
            <section className='md:flex gap-5 my-10 max-w-6xl mx-auto'>
                {/* Products Link */}
                <div className='border-2 w-[300px] rounded-2xl'>
                    <Categories
                        categories={categories}
                    ></Categories>
                </div>
                {/* Products API */}
                <div className=' border-2 w-full'>
                    <Outlet></Outlet>
                </div>
            </section>
        </div>
    );

};

Gadgets.propTypes = {
    props: PropTypes
};

export default Gadgets;