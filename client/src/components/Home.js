import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Home extends Component {
    render() {
        return (
            <div>
                Im the landing page!
                <header>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'red' }}>Home</Link>
                    <Link to={'/model'} style={{ textDecoration: 'none', color: 'red' }}>Model Signup</Link>
                    <Link to={'/models'} style={{ textDecoration: 'none', color: 'red' }}>Models</Link>
                    <Link to={'/actor'} style={{ textDecoration: 'none', color: 'red' }}>Actor Signup</Link>
                    <Link to={'/actors'} style={{ textDecoration: 'none', color: 'red' }}>Actors</Link>
                    <Link to={'/artist'} style={{ textDecoration: 'none', color: 'red' }}>Artist Signup</Link>
                    <Link to={'/artists'} style={{ textDecoration: 'none', color: 'red' }}>Artists</Link>
                </header>
            </div>
        );
    }
}

export default Home;