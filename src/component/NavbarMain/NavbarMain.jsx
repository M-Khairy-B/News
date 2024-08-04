import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user.svg";
import search from "../../assets/images/serach.svg";
import Vector from "../../assets/images/Vector.svg";
import bar from "../../assets/images/bar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "../../../node_modules/@fortawesome/free-solid-svg-icons";

export default function NavbarMain() {
    return (
        <React.Fragment>
            <header>
                <Navbar expand="xl" className="bg-body-tertiary navbar-main">
                    <Container>
                        <Navbar.Brand className="logo-main" href="/">
                            <img src={logo} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <img src={bar} alt="" />
                          </Navbar.Toggle>
                        <Navbar.Collapse
                            id="basic-navbar-nav"
                            className="nav-main"
                        >
                            <Nav className="m-auto flex-lg-grow-1 justify-content-lg-between nav-link-main">
                                <NavLink to="/" className="nav-link">
                                    
                                    Corona Updates
                                </NavLink>
                                <NavLink to="/general" className="nav-link">
                                General
                                </NavLink>
                                <NavLink to="/technology" className="nav-link">
                                Technology
                                </NavLink>
                                <NavLink to="/business" className="nav-link">
                                    Business
                                </NavLink>
                                <NavLink to="/sports" className="nav-link">
                                    Sports
                                </NavLink>
                                <NavLink to="/entertainment" className="nav-link">
                                Entertainment
                                </NavLink>

                                <NavLink to="/science" className="nav-link">
                                Science
                                </NavLink>
                                <NavLink
                                    to="/notfound"
                                    className="nav-link d-none d-lg-block"
                                    disabled
                                >
                                    <img src={Vector} alt="" />
                                </NavLink>
                            </Nav>
                            <div className="d-flex justify-content-center align-items-center all-icon ">
                                <NavLink to="/" className="nav-link">
                                    <img src={user} alt="" />
                                </NavLink>
                                <NavLink to="/" className="nav-link">
                                    <img src={search} alt="" />
                                </NavLink>
                                <NavLink to="/" className="nav-link d-none d-lg-block">
                                    <img src={bar} alt="" />
                                </NavLink>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </React.Fragment>
    );
}
