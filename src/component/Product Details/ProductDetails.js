import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHook from '../Use Hook/useHook';

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);



    useEffect(() => {
        const url = useHook;
        console.log(useHook);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);


    return (
        <div>
            Product Id: {id}
            
            {
                product.map((item) => (
                    <div>
                        <h2>Name:{item.name}</h2>
                    </div>
                ))
            }

        </div>
    );
};

export default ProductDetails;