import React from 'react';
import Carousel from '../Home/Carousel';
import Product from '../Producs/Product';
import ProductCategory from '../ProductCategory/ProductCategory';


const Home = () => {
    return (

        <div className='container'>
            <Carousel />
            <ProductCategory />
            <Product />
            
        </div>
    );
};

export default Home;