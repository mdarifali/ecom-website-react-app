import React from 'react';
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


const Footer = () => {
    return (
        <footer class=" text-center mt-5" id='footer-bg'>
            <div class="container">
                <section class="py-4">
                    <a class="btn btn-dark m-1" href="#!"><BsFacebook className='fs-5'/></a>
                    <a class="btn btn-dark m-1" href="#!"><FcGoogle className='fs-5'/></a>
                    <a class="btn btn-dark m-1" href="#!"><BsGithub className='fs-5'/></a>
                    <a class="btn btn-dark m-1" href="#!"><BsLinkedin className='fs-5'/></a>
                </section>
                <div class="text-center pb-4">
                    © 2022 Copyright Arif Ali
                </div>
            </div>
        </footer>


    );
};

export default Footer;