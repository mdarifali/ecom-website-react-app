import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer class="bg-dark text-center text-white">
                
                <div class="container p-4">
                    <section class="mb-4">
                        {/* <!-- Facebook --> */}
                        <a class="btn btn-outline-light m-2" href="#!"
                        ><BsFacebook className='fs-5' /></a>

                        {/* <!-- Google --> */}
                        <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
                        ><FcGoogle /></a>

                        {/* <!-- Linkedin --> */}
                        <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
                        ><BsGithub /></a>

                        {/* <!-- Github --> */}
                        <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
                        ><BsLinkedin /></a>
                    </section>
                    
                    <section class="">
                        <form action="">
                            
                            <div class="row d-flex justify-content-center align-items-center">
                                <div class="col-auto">
                                    <p class="p-0">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="text-dark form-floating mb-4">
                                        <input type="email" id="floatingInput" class="form-control" placeholder='Email address'/>
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>

                    <hr />
                    
                    <section class="mt-4">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <Link to='/' class="nav-link text-uppercase">Contact Us</Link>
                            </div>
                            
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <Link to='/' class="nav-link text-uppercase">About Us</Link>
                            </div>
                            
                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <Link to='/' class="nav-link text-uppercase">Products</Link>
                            </div>

                            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <Link to='/' class="nav-link text-uppercase">Login</Link>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2023 Copyright All rights reserved | This template is made with: Md Arif Ali
                </div>
                
            </footer>
        </div>

    );
};

export default Footer;