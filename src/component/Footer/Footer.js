import React from 'react';
import { BsFacebook } from 'react-icons/bs';


const Footer = () => {
    return (

        <footer class=" text-center ">
            <div class="container p-4">
                <section class="mb-4">

                    <a class="btn btn-primary btn-floating m-1" href="#!"><BsFacebook /></a>

                    {/* <a class="btn btn-primary btn-floating m-1"  href="#!" role="button"><i class="fab fa-twitter"></i></a>

                    <a class="btn btn-primary btn-floating m-1"href="#!" role="button"><i class="fab fa-google"></i></a>

                    <a class="btn btn-primary btn-floating m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>

                    <a class="btn btn-primary btn-floating m-1" href="#!" role="button"><i class="fab fa-linkedin-in"></i></a>

                    <a class="btn btn-primary btn-floating m-1" href="#!" role="button"><i class="fab fa-github"></i></a> */}
                </section>

                <section class="">
                    <form action="">
                        <div class="row d-flex justify-content-center">
                            <div class="col-auto">
                                <p class="pt-2">
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </div>

                            <div class="col-md-5 col-12">
                                <div class="form-outline mb-4">
                                    <input type="email" id="form5Example2" class="form-control" />
                                    <label class="form-label" for="form5Example2">Email address</label>
                                </div>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary mb-4">
                                </button>
                            </div>

                        </div>

                    </form>
                </section>




            </div>


            <div class="text-center p-3">
                © 2020 Copyright:
                <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>

        </footer>

    );
};

export default Footer;