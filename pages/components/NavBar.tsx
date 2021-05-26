import React from 'react';
import Link from 'next/link';
const logo = require('../../images/logo.jpg')

export default class NavBar extends React.Component {
    render() {
        return(
            <nav className="iv-nav">
              <div className="nav-wrapper">
              <a href="#">
                <img className="logo" alt={''} src={logo} />
              </a>
              <ul id="nav-mobile" className="right">
                <li><a className="nav-item" href="#services">Services</a></li>
                <li><a className="nav-item" href="#contact">Contact</a></li>
                {/**add social media Icons**/}
              </ul>
            </div>
            {/*<div><img src="../../images/headerImg.jpg"/></div>*/}
          </nav>
        )
    }
}