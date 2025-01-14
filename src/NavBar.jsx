import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                               
                            
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link " aria-current="page" to="/home">होम पेज</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/bharat">भारत</NavLink>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/foreign">विदेश</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/entertainment">मनोरंजन</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/game">खेल</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/india">विज्ञान-टेक्नोलॉजी</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/india">सोशल</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/india">वीडियो</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/india">पॉडकास्ट</NavLink>
                                        </li>

                                        
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
