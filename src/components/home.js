import React from 'react';
import logo from '../assets/logo.png'
import vector1 from '../assets/Vector 1.png';
import homePizza from '../assets/homePizza.png'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container__left">
                <img src={logo} alt="logo" height={83} />
                <div className="home-container__left__text">
                    <h1>
                        Discover the <span>Best</span> Food and Drinks
                    </h1>
                    <p>Naturally made Healthcare Products for the better care & support of your body.</p>
                </div>
                <button className="app-btn btn-red">Explore Now</button>
            </div>
            <div className="home-container__right">
                <div className='home-container__right-content'>
                    <img src={homePizza} alt="vector" height={804} />
                    <img className='home-container__right-vector' src={vector1} alt="vector" height={839} />
                    <button className="app-btn btn-outline-white-red">Get In Touch</button>
                </div>
            </div>
        </div>
    )
}

export default Home