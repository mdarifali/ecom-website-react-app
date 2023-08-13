import React, { useEffect } from 'react';
import './cart.css';
import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { FaArrowRight, FaArrowLeft, FaAngleDown, FaCcMastercard, FaCcVisa, FaCcAmex, FaCcPaypal } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } from '../Redux Slice/CartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart, dispatch]);

    return (
        <div>
            <section style={{ backgroundColor: "#eee" }}>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col">
                            <div class="card">
                                <div class="card-body p-4">

                                    <div class="row">
                                        <div class="col-lg-7">
                                            <h5 class="mb-4">
                                                <Link to="/product" class="text-dark nav-link p-0">
                                                    <FaArrowLeft className='fs-4' /> Continue Shopping
                                                </Link>
                                            </h5>

                                            <hr />

                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p>Shopping Cart</p>
                                                </div>
                                                <div>
                                                    <p>Total Cart Items: <span className='fw-bold'>{cart.length}</span></p>
                                                </div>
                                            </div>

                                            {
                                                cart.map((data) => (

                                                    <div class="card mb-4 shadow">
                                                        <div class="card-body">
                                                            <div class="mb-4 ">
                                                                <div class="d-flex flex-row align-items-center">
                                                                    <div className='col-md-4 col-lg-4 col-xl-4'>
                                                                        <img
                                                                            src={data.img} class="img-fluid rounded-3" alt="Shopping item" style={{ width: "80px" }}
                                                                        />
                                                                        <div className='mt-2'>
                                                                            <h6 className='text-lowercase'>{data.name}</h6>
                                                                            <h6 class="small mb-0">{data.seller}</h6>
                                                                        </div>
                                                                    </div>

                                                                    <div class="col-md-4 col-lg-4 col-xl-4 col-6">
                                                                        <div className="d-flex justify-content-between align-items-center">
                                                                            <button class="btn btn-transparent"
                                                                                onClick={() => dispatch(decreaseItemQuantity(data.id))}>
                                                                                <AiOutlineMinusCircle className='fs-4' />
                                                                            </button>

                                                                            <input id="form1" name="quantity" value={data.quantity} type="text"
                                                                                class="form-control text-center" />

                                                                            <button class="btn btn-transparent"
                                                                                onClick={() => dispatch(increaseItemQuantity(data.id))}>
                                                                                <AiOutlinePlusCircle className='fs-4' />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-2 col-lg-2 col-xl-2 text-center">
                                                                        <span class="mb-0">$ {data.price}</span>
                                                                    </div>
                                                                    <div class="col-md-2 col-lg-2 col-xl-2 text-end">
                                                                        <button className='btn bg-transparent'
                                                                            onClick={() => dispatch(removeItem(data.id))}>
                                                                            <TiDeleteOutline className='fs-2 text-danger' />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </div>


                                        <div class="col-lg-5">
                                            <div class="card bg-secondary text-white rounded-3">
                                                <div class="card-body shadow">
                                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 class="mb-0">Card details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                            class="img-fluid rounded-circle" style={{ width: "50px" }} alt="Avatar" />
                                                    </div>

                                                    <div className='text-center'>
                                                        <p>Select Card Type</p>
                                                        <a href="#!" type="submit">
                                                            <FaCcMastercard className='me-3 fs-1 text-light' />
                                                        </a>
                                                        <a href="#!" type="submit">
                                                            <FaCcVisa className='me-3 fs-1 text-light' />
                                                        </a>
                                                        <a href="#!" type="submit">
                                                            <FaCcAmex className='me-3 fs-1 text-light' />
                                                        </a>
                                                        <a href="#!" type="submit">
                                                            <FaCcPaypal className='fs-1 text-light' />
                                                        </a>
                                                    </div>

                                                    <form class="mt-4">
                                                        <div class="form-outline form-white mb-4">
                                                            <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                                                placeholder="Cardholder's Name" />
                                                            <label class="form-label" htmlFor="typeName">Cardholder's Name</label>
                                                        </div>

                                                        <div class="form-outline form-white mb-4">
                                                            <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                                                                placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                                                            <label class="form-label" htmlFor="typeText">Card Number</label>
                                                        </div>

                                                        <div class="row mb-4">
                                                            <div class="col-md-6">
                                                                <div class="form-outline form-white">
                                                                    <input type="text" id="typeExp" class="form-control form-control-lg"
                                                                        placeholder="MM/YYYY" size="7" minLength="7" maxLength="7" />
                                                                    <label class="form-label" id='typeExp' htmlFor="typeExp">Expiration</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-outline form-white">
                                                                    <input type="password" id="typeText1" class="form-control form-control-lg"
                                                                        placeholder="cvv number" size="1" minLength="3" maxLength="3" />
                                                                    <label class="form-label" htmlFor="typeText1">CVV</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>

                                                    <hr class="my-4" />

                                                    <div class="d-flex justify-content-between">
                                                        <p class="mb-2">Total Quantity</p>
                                                        <p class="mb-2">{totalQuantity}</p>
                                                    </div>

                                                    <div class="d-flex justify-content-between">
                                                        <p class="mb-2">Subtotal</p>
                                                        <p class="mb-2">${totalPrice}</p>
                                                    </div>

                                                    {/* <div class="d-flex justify-content-between">
                                                        <p class="mb-2">Shipping</p>
                                                        <p class="mb-2">$20.00</p>
                                                    </div> */}

                                                    <div class="d-flex justify-content-between mb-4">
                                                        <p class="mb-2">Total(Incl. taxes)</p>
                                                        <p class="mb-2">${totalPrice}</p>
                                                    </div>

                                                    <button type="button" class="btn btn-info btn-block btn-lg  w-100">
                                                        <div class="d-flex justify-content-between text-light">
                                                            <span>${totalPrice}</span>
                                                            <span>Checkout<FaArrowRight className='ms-1' /></span>
                                                        </div>
                                                    </button>

                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;