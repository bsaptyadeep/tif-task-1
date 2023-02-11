import React from 'react';
import aboutUs from '../assets/aboutUs.png'

const AboutUs = () => {
  return (
    <section className='about-us-container'>
        <main className='about-us-container__content'>
            <img src={aboutUs} alt="about-us" height={468} />
            <aside className='about-us-container__content-right'>
                <h1>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                <button className="app-btn btn-red">Read More</button>
            </aside>
        </main>
    </section>
  )
}

export default AboutUs