import React, { useState } from 'react';
import useHook from './useHook';

const useCart = () => {
    const [products] = useHook();
    const [cart, setCart] = useState(products);

    return [cart, setCart];
};

export default useCart;