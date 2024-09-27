import React, { useState } from "react";
import { MdFlight } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import './Navbar.css';  // Custom styling

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <div>
            <nav className='navbar navbar-expand-lg'>
                <li style={{ color: "white" }} className='nav-item nav-link'>
                    <MdFlight size={40} />
                </li>
                <button
                    className='navbar-toggler'
                    type='button'
                    onClick={() => setIsMobile(!isMobile)}
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <ul className={`navbar-links navbar-nav ms-auto ${isMobile ? "mobile-menu" : ""}`}>

                    <li className='nav-item'>
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/flight">Flight</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/account">My Account</Link>
                    </li>

                    {/* Manage Booking Dropdown */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button"
                            id="manageBookingDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            Manage Booking
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="manageBookingDropdown">
                            <li>
                                <Link className="dropdown-item" to="/contact">Modify Booking</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/cancelbooking">Cancel Booking</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/bookings">Review Booking</Link>
                            </li>
                        </ul>
                    </li>

                    <li className='nav-item'>
                        <Link className='nav-link' to="/support">Support</Link>
                    </li>

                    {/* Country Dropdown */}
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button"
                            id="countryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                            Country
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="countryDropdown">
                            <li>
                                <Link className="dropdown-item" to="/country/usa">United States</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/country/canada">Canada</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/country/uk">United Kingdom</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/country/india">India</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/country/australia">Australia</Link>
                            </li>
                        </ul>
                    </li>

                </ul>

                {/* Login and Sign Up Buttons */}
                <ul className={`navbar-links navbar-nav ms-auto ${isMobile ? "mobile-menu" : ""}`} id="buttons">
                    <li className='nav-item rounded-4'>
                        <Link className='nav-link' to="/login">Login</Link>
                    </li>
                    <li className='nav-item rounded-4'>
                        <Link className='nav-link' to="/signup">Sign Up</Link>
                    </li>
                </ul>

            </nav>
            <Outlet />
        </div>
    );
};

export default Navbar;
