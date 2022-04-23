import React from 'react';

const ProductCategory = () => {
    return (
        <div className='d-flex justify-content-center mt-4'>
                <a href="#/" class="btn btn-success btn-lg active me-3" aria-current="page">All Products</a>
                <a href="#/" class="btn btn-outline-dark btn-lg me-3">Men's Shoes</a>
                <a href="#/" class="btn btn-outline-dark btn-lg me-3">Men's Pants</a>
                <a href="#/" class="btn btn-outline-dark btn-lg me-3">Men's T-sirt</a>
                <a href="#/" class="btn btn-outline-dark btn-lg me-3">Backpack</a>
        </div>
    );
};

export default ProductCategory;