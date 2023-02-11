import React from 'react';
import logo from '../assets/logo.png';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';

const Footer = () => {
  return (
    <footer className='footer-container'>
        <img src={logo} alt="logo" height={125} />
        <nav className='footer-container-contact-us'>
            <h1>Contact Us</h1>
            <ul>
                <li>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</li>
                <li>example2020@gmail.com</li>
                <li>(904) 443-0343</li>
            </ul>
        </nav>
        <nav className='footer-container-more'>
            <h1>More</h1>
            <ul>
                <li>About Us</li>
                <li>Products</li>
                <li>Career</li>
                <li>Contact Us</li>
            </ul>
        </nav>
        <nav className='footer-container-social-links'>
            <h1>Social Links</h1>
            <div className='footer-container-social-links-images'>
                <img src={instagram} alt="instagram" height={21} />
                <img src={twitter} alt="instagram" height={21} />
                <img src={facebook} alt="instagram" height={21} />
            </div>
            <p>© 2022 Food Truck Example</p>
        </nav>
    </footer>
  )
}

export default Footer