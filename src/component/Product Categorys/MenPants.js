import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MenPants = () => {

    
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);

    };

    useEffect(() => {

        fetch('menpants.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className='container p-0'>
            <div className="row g-5">

                {
                    products.map (product =>

                        <div  key={product.id} className="col-md-4">
                            <div className="card shadow" >
                                <Link to="/">
                                    <img className='card-img-top' src={product.img} alt="" />
                                </Link>
                                <div className='card-body'>
                                    <h5 className='card-title'>{product.name}</h5>
                                    <p className='card-text'>Price: <span className='fw-bold'>${product.price}</span></p>
                                    <p className='card-text'>Seller: {product.seller}</p>
                                    <p className='card-text'>Rating: {product.ratings} stars</p>
                                </div>
                                <button type='button' className='btn btn-warning' onClick={() => handleAddToCart(product)} id='addToCart-btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add to Cart</button>
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default MenPants;