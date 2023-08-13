import React from 'react';
import '../Login Page/login.css';
import logo from "../../logo.svg";
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div class="container my-5">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-xl-10">
                    <div class="card rounded-3 bg-dark text-light">
                        <div class="row g-0">
                            <div class="col-lg-6">
                                <div class="card-body p-md-5 mx-md-4">

                                    <div class="text-center">
                                        <img src={logo}
                                            style={{ width: "185px" }} alt="logo" />
                                        <h5 class="mt-4 mb-5 pb-1">Jon Our Team</h5>
                                    </div>

                                    <form>
                                        <p>Please create new your account</p>
                                        <div className="row">
                                            <div className="col-6">
                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form2Example11" class="form-control"
                                                        placeholder="first name" />
                                                    <label class="form-label" for="form2Example11">First Name</label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div class="form-outline mb-4">
                                                    <input type="text" id="form2Example11" class="form-control"
                                                        placeholder="last name" />
                                                    <label class="form-label" for="form2Example11">Last Name</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-outline mb-4">
                                            <input type="email" id="form2Example11" class="form-control"
                                                placeholder="email address" />
                                            <label class="form-label" for="form2Example11">Email</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="form2Example22" class="form-control" />
                                            <label class="form-label" for="form2Example22">Password</label>
                                        </div>

                                        <div class="text-center pt-1 mb-5 pb-1">
                                            <button class="btn btn-primary w-100 fa-lg gradient-custom-2 mb-3" type="button">Sign Up
                                            </button>
                                        </div>

                                        <div class="d-flex align-items-center justify-content-center pb-4">
                                            <p class="mb-0 me-2">Already have an account?</p>
                                            <Link to='/login'>
                                                <button type="button" class="btn btn-outline-danger">Login Now</button>
                                            </Link>
                                        </div>

                                    </form>

                                </div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <h4 class="mb-4">We are more than just a company</h4>
                                    <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;