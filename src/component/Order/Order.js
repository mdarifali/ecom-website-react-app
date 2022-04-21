import React from 'react';

const Order = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;

    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className=''>
            <img src='' alt="" />
            <h1 className='text-uppercase fs-5'>Order Summary</h1>
            <div className='my-4'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            </div>
        </div>
    );
};

export default Order;