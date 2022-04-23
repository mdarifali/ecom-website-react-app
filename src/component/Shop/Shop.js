import React from 'react';
import Order from '../Order/Order';
import './Shop.css';


const Shop = ({ product, handleAddToCart, cart }) => {
    const {name, price, img, seller, ratings} = product;

    return (
        <div className='col-md-4'>
            <div className="card h-100">
                <img className='card-img-top img-fluid' src={img} alt="" />
                <div className='card-body'>
                    <h5 className='card-title fw-bold pb-2'>{name}</h5>
                    <p className='mb-1'>Price: <span className='fw-bold'>${price}</span></p>
                    <p className='mb-1'>Seller: {seller}</p>
                    <p className='mb-1'>Rating: {ratings} stars</p>
                </div>
                <div className='d-flex justify-content-between m-4'>
                    <button onClick={() => handleAddToCart(product)} className='bg-warning p-3 btn fw-bold' id='addToCart-btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add to Cart</button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Details Info
                    </button>
                </div>
            </div>

            {/* Sidebar sections */}
            <div class="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header bg-light">
                    <button type="button" class="btn-close btn-danger text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body bg-warning">
                    <Order cart={cart} />
                </div>
            </div>

            {/* Modals sections */}
            <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{cart.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img className='card-img img-fluid p-2 border border-2 border-warning rounded-3' src={product.img} alt="" />
                            <div className='card-body text-center'>
                                <p className='mb-1'>Price: <span className='fw-bold'>${price}</span></p>
                                <p className='mb-1'>Seller: {seller}</p>
                                <p className='mb-1'>Rating: {ratings} stars</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;