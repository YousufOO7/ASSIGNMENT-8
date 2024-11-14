import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Categories.css';

const Categories = ({ categories }) => {
    const [activeCategory, setActiveCategory] = useState('');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <NavLink
                    to="/"
                    className={`btn font-bold rounded-full my-2 w-[200px] mx-auto ${activeCategory === '' ? 'bg-active-color' : ''}`}
                    onClick={() => handleCategoryClick('')}
                >
                    All Products
                </NavLink>
                {
                    categories.map(category => (
                        <NavLink
                            key={category.category}
                            to={`/category/${category.category}`}
                            className={`btn font-bold rounded-full my-2 w-[200px] mx-auto ${activeCategory === category.category ? 'bg-active-color' : ''}`}
                            onClick={() => handleCategoryClick(category.category)}
                        >
                            {category.category}
                        </NavLink>
                    ))
                }

            </div>
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes
};

export default Categories;
