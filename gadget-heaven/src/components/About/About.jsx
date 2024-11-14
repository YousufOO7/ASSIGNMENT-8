import PropTypes from 'prop-types';

const About = props => {
    return (
        <div>
            <div className="hero bg-[#9538E2] pt-10 px-32 pb-5  mx-auto">
                <div className='text-center items-center'>
                    <h1 className="text-5xl font-bold text-white w-5/6 mx-auto">About Of WebSite</h1>
                    <p className="py-6 w-4/6 mx-auto text-white opacity-70">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                </div>
            </div>
            
            <div className='max-w-6xl mx-auto my-5'>
            <div className="collapse collapse-arrow bg-base-200 ">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-4xl font-medium text-[#9538E2]">Why You visit our page</div>
                <div className="collapse-content">
                    <p>Gadget Heaven is a one-stop shop for the latest and greatest in technology and gadgets. Whether you're a tech enthusiast or just looking for useful accessories to enhance your daily life, our site is designed to offer a smooth and enjoyable browsing experience. You’ll find comprehensive product descriptions, user reviews, and expert recommendations to help you make informed choices.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-4xl font-medium text-[#9538E2]">What will you find on Gadget Heaven</div>
                <div className="collapse-content">
                    <p>On our site, you'll discover a wide range of products, from cutting-edge smartphones and laptops to unique accessories that make your tech setup complete. We also offer comparison tools, product reviews, and top picks for different categories, ensuring you have all the information you need at your fingertips.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-4xl font-medium text-[#9538E2]">How do we select our products</div>
                <div className="collapse-content">
                    <p> Our team carefully selects products based on quality, performance, and customer feedback. We aim to provide a curated selection that includes only the best and most reliable gadgets. Each product listed on Gadget Heaven undergoes a rigorous review to meet our high standards.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-4xl font-medium text-[#9538E2]">Why Trust Our Reviews and Recommendations?</div>
                <div className="collapse-content">
                    <p> We are committed to providing honest and unbiased reviews. Our team of tech experts tests products thoroughly and keeps up with the latest industry trends. We also encourage user feedback to provide a comprehensive view of each product.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-4xl font-medium text-[#9538E2]">What Makes Gadget Heaven Different?</div>
                <div className="collapse-content">
                    <p>  Unlike other gadget websites, we focus on providing a personalized experience. Our site is designed with ease of use in mind, featuring detailed product descriptions, interactive tools, and dedicated customer support. Our mission is to help you find gadgets that truly improve your daily life.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

About.propTypes = {
    props: PropTypes
};

export default About;