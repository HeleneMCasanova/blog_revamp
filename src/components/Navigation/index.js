import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

class Navigation extends Component {

    render = () => {

        return (
            <div style = {{ width:'100%', left:'0', right:'0', top:'0', backgroundColor:'white', position:'fixed'}}>
                <div id = "left-nav-bar">
                    <NavLink exact to = {'/'} className = "nav-link-styles">Home</NavLink>
                    <NavLink to = {'/BuJo'} className = "nav-link-styles">Bullet Journal</NavLink>
                    <NavLink to = {'/Programming'} className = "nav-link-styles">Programming</NavLink>
                    <NavLink to = {'/Travel'} className = "nav-link-styles">Travel</NavLink>
                    <NavLink to = {'/contact'} className = "nav-link-styles">Contact</NavLink>
                </div>

                <div id = "right-nav-bar">

                </div>
            </div>
        );
    }
}

export default Navigation;