import React from 'react';
import img1 from '../Images/img-1.jpg';
import img2 from '../Images/img-2.jpg';
import img3 from '../Images/img-3.jpg';

const Carousel = () => {

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img3} className="d-block img-fluid" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-white">
                        <h1>GET 10% off all items</h1>
                        <p>Big change for best purchase.  Offer validity for next year 2023</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={img2} className="d-block img-fluid" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-white">
                        <h1>GET 10% off all items</h1>
                        <p>Big change for best purchase.  Offer validity for next year 2023</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src={img1} className="d-block img-fluid" alt="..." />
                    <div className="carousel-caption d-none d-md-block text-warwhite">
                        <h1>GET 10% off all items</h1>
                        <p>Big change for best purchase.  Offer validity for next year 2023</p>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;