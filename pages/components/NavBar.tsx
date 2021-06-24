import React from 'react';
import Link from 'next/link';
const logo = require('../../images/logo.jpg')
const sm1 = require('../../images/fb2x.png')
const sm2 = require('../../images/insta2x.png')

export default class NavBar extends React.Component {
    render() {
        return(
            <nav className="iv-nav">
              <div className="nav-wrapper">
              <a href="#">
                <img className="logo" alt={''} src={logo} />
                </a>
                {/**<a href=''><img className="sm1" alt={''} src={sm1} /></a>
        <a><img className="sm2" alt={''} src={sm2} /></a>**/}
              <ul id="nav-mobile" className="right">
                <li className="dropmenu"><a className="nav-item">Social Media</a>
      <ul className="dropdown">
        <li><a href="https://www.instagram.com/indvillagerockford/" target="blank">Rockford Instagram</a></li>
        <li><a href="https://www.instagram.com/indvillagenaperville/" target="blank">Naperville Instagram</a></li>
        <li><a href="https://www.facebook.com/indvillage" target="blank">Facebook</a></li>
      </ul> 
      </li>
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