import React, { Component } from 'react'
import './main.css';
import Login from "./Login";


class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div classNamess="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">TRUCK.PE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Truck Owner</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Truck Driver</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Truck Select</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Truck Fleet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                        </ul>
                    </div>
<Login />
                </div>
            </nav>
        )
    }
}




export default Navbar;