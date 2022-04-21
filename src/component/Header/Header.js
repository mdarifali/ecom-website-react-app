import React from 'react';
import './Header.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-3" id='bg'>
                <div className="container">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav m-auto">
                            <Link className="nav-link me-3" to='/home'>Home</Link>
                            <Link className="nav-link me-3" to="/product">Product</Link>
                            <Link className="nav-link me-3" to="/cart">Cart <sup>0</sup> </Link>
                            <Link className="nav-link me-3" to="/Order">Order</Link>
                        </div>
                        <div className='d-flex'>
                            <input className='form-control bg-transparent text-light me-2' type="search" name="" id="" placeholder='Search' />
                            <button className='btn btn-success'>Search</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;