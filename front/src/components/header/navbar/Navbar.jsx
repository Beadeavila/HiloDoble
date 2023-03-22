import React, { Component } from 'react'
import "./Navbar.css"
import Searchbar from '../searchbar/Searchbar';
import cart from '../../img/cart.svg';
import profile from '../../img/profile.svg';


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav>
                    <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li>
                            <a href="index.html"><img className='cart' src={cart} alt="logo" /></a>
                            <a href="index.html"><img className='profile' src={profile} alt="Profile Section" /></a>
                        </li>
                        <li>
                            <Searchbar/>
                        </li>
                        <li><a className='active' href="index.html">INICIO</a></li>
                        <li><a href="index.html">TIENDA</a></li>
                        <li><a href="index.html">SOBRE NOSOTROS</a></li>
                        <li><a href="index.html">TIENDAS AMIGAS</a></li>
                        <li><a href="index.html">CONTACTA</a></li>
                    </ul>
                </nav>
                <div id='mobile' onClick={this.handleClick}>
                    <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </>
        )
}
}

export default Navbar