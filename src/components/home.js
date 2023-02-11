import React from 'react';
import logo from '../assets/logo.png'
import vector1 from '../assets/Vector 1.png';
import homePizza from '../assets/homePizza.png'

const Home = () => {
    return (
        <section className="home-container">
            <main className="home-container__left">
                <img src={logo} alt="logo" height={83} />
                <section className="home-container__left__text">
                    <h1>
                        Discover the <span>Best</span> Food and Drinks
                    </h1>
                    <p>Naturally made Healthcare Products for the better care & support of your body.</p>
                </section>
                <button className="app-btn btn-red">Explore Now</button>
            </main>
            <aside className="home-container__right">
                <figure className='home-container__right-content'>
                    <img src={homePizza} alt="vector" height={804} />
                    <img className='home-container__right-vector' src={vector1} alt="vector" height={839} />
                    <button className="app-btn btn-outline-white-red">Get In Touch</button>
                </figure>
            </aside>
        </section>
    )
}

export default Home