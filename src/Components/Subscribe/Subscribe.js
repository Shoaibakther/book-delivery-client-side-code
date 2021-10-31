import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='main-subs'>
            <div className="first">
                <h5>Subscribe</h5>
                <p>Enter your email below to subscribe to our weekly newsletter and receive free product updates.</p>
                <input type="email" placeholder="Enter your email" name="" id="" />
                <input className="bg-primary" type="submit" value="Send" />
            </div>
            <div className="second">
                <h5>Let's keep in touch</h5>
                <p>Nevada, USA <br />
Some random address here <br />
                    Phone: 1-800-0000</p>
                <p>contact@mycompany.com</p>
            </div>
        </div>
    );
};

export default Subscribe;