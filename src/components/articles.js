import React, { useState } from 'react';
import articleImage1 from "../assets/articleImage1.png";
import articleImage2 from "../assets/articleImage2.png";
import articleImage3 from "../assets/articleImage3.png";
import articleImage4 from "../assets/articleImage4.png";
import articleImage5 from "../assets/articleImage5.png";
import articleImage6 from "../assets/articleImage6.png";


const Articles = () => {
    // page navigation is done using useState react hook
    // page state variable
    const [page, setPage] = useState(1);

    const data = [
        [
            {
                image: articleImage1,
                title: "Grilled  Tomatoes at Home",
                body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            },
            {
                image: articleImage2,
                title: "Snacks for Travel",
                body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            },
            {
                image: articleImage3,
                title: "Post-workout Recipes",
                body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            },
        ],
        [
            {
                image: articleImage4,
                title: "How To Grill Corn",
                body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            },
            {
                image: articleImage5,
                title: "Crunchwrap Supreme",
                body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            },
            {
                image: articleImage6,
                title: "Broccoli Cheese Soup",
                body: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
            },
        ]
    ]

    // next previous page
    const decrement = () => {
        if (page > 1)
            setPage(page - 1);
    }

    // next page
    const increment = () => {
        if (page < 2)
            setPage(page + 1);
    }


    return (
        <section className='article-container'>
            <h1>Latest Articles</h1>
            <main className='article-container__content'>
                {
                    data[page - 1].map((data, i) => {
                        return (
                            <article className="slider-container__context-slide" key={i}>
                                <img src={data.image} height={257} />
                                <section className='slider-container__context-slide-text'>
                                    <h1>{data.title}</h1>
                                    <p>{data.body}</p>
                                    <button className="app-btn btn-outline-blue-white">Read More</button>
                                </section>
                            </article>
                        )
                    })
                }
            </main>
            <nav className='page-control'>
                <section className={page === 1 ? 'page-control-btn inactive' : 'page-control-btn'} onClick={decrement}>
                    <section className='svg-container'>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.44189 15.8523C9.99486 15.5393 10.1753 14.7427 9.80834 14.234C9.70603 14.0921 8.12567 12.6312 6.29636 10.9875L2.97042 7.99899L6.2973 5.01011C8.12699 3.36619 9.70744 1.90503 9.80928 1.76312C9.92885 1.59653 9.99467 1.35683 9.99505 1.08643C9.99562 0.714453 9.95488 0.630597 9.62964 0.333876C9.29554 0.0291567 9.21935 0 8.75851 0H8.25353L4.12681 3.76388L0 7.52768V7.959C0 8.21418 0.062993 8.47719 0.154181 8.60293C0.377575 8.91117 7.52253 15.452 7.95885 15.7478C8.38772 16.0386 9.03263 16.084 9.44189 15.8523Z" fill={page === 1 ? "#AFAFAF" : "#424961"} />
                        </svg>
                    </section>
                </section>
                <p className='page-number'>{page}/2</p>
                <section className={page === 2 ? 'page-control-btn inactive' : 'page-control-btn'} onClick={increment}>
                    <section className='svg-container'>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.558107 0.147705C0.00513666 0.460681 -0.175258 1.25727 0.19166 1.76599C0.293975 1.9079 1.87433 3.3688 3.70364 5.01247L7.02958 8.00101L3.7027 10.9899C1.87301 12.6338 0.292561 14.095 0.190718 14.2369C0.0711464 14.4035 0.00532551 14.6432 0.00494831 14.9136C0.00438252 15.2855 0.0451198 15.3694 0.370358 15.6661C0.70446 15.9708 0.780652 16 1.24149 16H1.74647L5.87319 12.2361L10 8.47232V8.041C10 7.78582 9.93701 7.52281 9.84582 7.39707C9.62242 7.08883 2.47747 0.547977 2.04115 0.252202C1.61228 -0.0385846 0.967365 -0.0839958 0.558107 0.147705Z" fill={page === 2 ? "#AFAFAF" : "#424961"} />
                        </svg>
                    </section>
                </section>
            </nav>
        </section>
    )
}

export default Articles