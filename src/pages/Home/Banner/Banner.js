import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero h-96" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1539755530862-00f623c00f52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Home Made Food at Your Doorstep</h1>
                    <p className="mb-5"></p>
                    <Link to='/services' className="btn btn-secondary">My Services</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;