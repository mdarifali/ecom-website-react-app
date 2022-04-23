import { useState } from 'react';
import Shop from '../Shop/Shop';
import useHook from '../useHook/useHook';

const Product = () => {

    const [products] = useHook();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);

    };

    return (
        <div className='container mt-5'>
            <div div className='row g-5'>
                <div className='d-flex justify-content-center'>
                </div>
                {
                    products.map(product => <Shop
                        key={product.id}
                        product={product}
                        cart={cart}
                        handleAddToCart={handleAddToCart}
                    ></Shop>)
                }
            </div>
        </div>
    );
};

export default Product;