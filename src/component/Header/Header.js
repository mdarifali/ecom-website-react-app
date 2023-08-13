import React, { useEffect } from "react";
import "./header.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsCartCheck } from "react-icons/bs";
import { getCartTotal } from "../Redux Slice/CartSlice";

const Header = () => {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark p-3">
        <div className="container p-0">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link me-1 active" to="/home">
                Home
              </Link>
              <Link className="nav-link me-1" to="/product">
                Products
              </Link>
              <Link className="nav-link me-1" to="/Order">
                Order
              </Link>
              <Link className="nav-link me-1" to="/login">
                Login
              </Link>
              <Link className="nav-link position-relative" to='/cart'>
                <BsCartCheck className="text-light fs-4" />
                <span class="position-absolute ms-1 translate-middle badge rounded-pill bg-secondary">
                  {totalQuantity}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
