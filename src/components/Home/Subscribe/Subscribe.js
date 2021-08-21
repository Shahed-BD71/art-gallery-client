import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <section className="subscribe">
            <div className="content">
              <h3>Subscribe to our Newsletter</h3>
              <p>Promotions, new products and sales.Directly to your inbox.</p>
              <input type="email" placeholder="Enter Your Email"/>
            </div>
        </section>
    );
};

export default Subscribe;