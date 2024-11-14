import PropTypes from 'prop-types';

const Footer = props => {
    return (
        <div>
            <footer className="bg-white p-20">
                <div className='text-center mb-5'>
                    <h2 className="text-4xl my-4 font-bold">Gadget Heaven</h2>
                    <p className='text-sm opacity-70'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className="border-t-2 border my-2 max-w-6xl mx-auto"></div>
                <section className='max-w-4xl mx-auto grid grid-cols-3 mt-5'>
                    <div className='text-center'>
                        <h4 className="text-xl font-bold mb-2">Services</h4>
                        <p className='opacity-70 text-sm'>Product Support</p>
                        <p className='opacity-70 text-sm'> Order Tracking</p>   
                        <p className='opacity-70 text-sm'>Shipping & Delivery</p>
                        <p className='opacity-70 text-sm'>Returns</p>
                    </div>
                    <div className='text-center'>
                        <h4 className="text-xl font-bold mb-2">Company</h4>
                        <p className='opacity-70 text-sm'> About Us</p>
                        <p className='opacity-70 text-sm'>Careers</p>
                        <p className='opacity-70 text-sm'> Contact</p>
                    </div>
                    <div className='text-center'>
                        <h4 className="text-xl font-bold mb-2">Legal</h4>
                        <p className='opacity-70 text-sm'>Terms of Service</p>
                        <p className='opacity-70 text-sm'> Privacy Policy</p>   
                        <p className='opacity-70 text-sm'>Cookie Policy</p>
                        <p className='opacity-70 text-sm'>Returns</p>
                    </div>
                </section>

            </footer>
        </div>
    );
};

Footer.propTypes = {
    props: PropTypes
};

export default Footer;