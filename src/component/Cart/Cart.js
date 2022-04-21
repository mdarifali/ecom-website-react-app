import React from 'react';
import useCart from '../useHook/useCart';
import useHook from '../useHook/useHook';

const Cart = () => {
    const [products] = useHook();
    const [cart, setCart] = useCart(products);
    console.log(cart);
    return (
        <div>
            <h1>Cart item</h1>
        </div>
    );
};

export default Cart;