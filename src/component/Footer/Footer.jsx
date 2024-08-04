import React from "react";
import logoWhite from "../../assets/images/logo-white.svg";
import facebook from "../../assets/images/facebook.svg";
import dashbord from "../../assets/images/dashbord.svg";
import twitter from "../../assets/images/twitter.svg";
import wifi from "../../assets/images/Wifi.svg";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <React.Fragment>
            <footer className="footer-main">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-12 col-lg-3">
                            <div className="logo-copyright d-flex flex-column justify-content-center align-items-center">
                                <div className="logo-white">
                                    <img src={logoWhite} alt="" srcSet="" />
                                </div>
                                <div className="copyright">
                                    <span>copyright ©</span>
                                    <span>2020 | NBC NEWS</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="lists">
                                <ul className="list-item text-center text-lg-start">
                                    <li className="links-items">
                                        <Link className="link-item">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="links-items">
                                        <Link className="link-item">
                                            Do not sell my personal info{" "}
                                        </Link>
                                    </li>
                                    <li className="links-items">
                                        <Link className="link-item">
                                            Terms of Service{" "}
                                        </Link>
                                    </li>
                                    <li className="links-items">
                                        <Link className="link-item">
                                            nbcnews.com Site Map
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="all-link-item">
                                <ul className="d-flex justify-content-between all-links-items">
                                    <li>
                                        <Link className="main-links">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="main-links">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="main-links">
                                            Careers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="main-links">
                                            Coupons
                                        </Link>
                                    </li>
                                </ul>
                                <div className="social-media d-flex justify-content-between justify-content-lg-end">
                                    <div className="links-social d-flex justify-content-between">
                                        <Link>
                                            <img src={wifi} alt="" srcSet="" />
                                        </Link>
                                        <Link>
                                            <img
                                                src={facebook}
                                                alt=""
                                                srcSet=""
                                            />
                                        </Link>
                                        <Link>
                                            <img
                                                src={dashbord}
                                                alt=""
                                                srcSet=""
                                            />
                                        </Link>
                                        <Link>
                                            <img
                                                src={twitter}
                                                alt=""
                                                srcSet=""
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}
