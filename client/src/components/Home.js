import React, { Component } from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"
import Counter from "./Counter"
import img from "../images/home.png"

// Home Component Styling
const Body = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-color: lightblue;
    padding-top: 20px;
    height: 100vh;
    width: 100vw;   
`;

const Header = styled.div`
    font-size: 30px;
    position: center;
    display: flex;
    justify-content:space-between;
    width: 50vw;
    font-family: Gobold High;
    margin: 0 auto;
    `;

const P = styled.div`
    padding-bottom: 25px;
    padding-top: 200px;
    font-size: 50px;
    position: center;
    display: flex;
    justify-content:space-evenly;
    color: white;
    font-family: Gobold High;
    `;

const P2 = styled.div`
    padding-left: 530px;
    padding-right: 530px;
    padding-bottom: 40px;
    font-size: 20px;
    position: center;
    display: flex;
    justify-content:space-evenly;
    color: white;
    font-family: Black Label;
    text-align: center;
    `;

const Count = styled.div`
    text-align:center;
    font-family: Headline One;
    font-size: 25px;
    `;


// Home Component
class Home extends Component {
    render() {
        return (
            <Body>
                <Header>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    <Link to={'/model'} style={{ textDecoration: 'none', color: 'white' }}>Model Signup</Link>
                    <Link to={'/models'} style={{ textDecoration: 'none', color: 'white' }}>Models</Link>
                    <Link to={'/actor'} style={{ textDecoration: 'none', color: 'white' }}>Actor Signup</Link>
                    <Link to={'/actors'} style={{ textDecoration: 'none', color: 'white' }}>Actors</Link>
                    <Link to={'/artist'} style={{ textDecoration: 'none', color: 'white' }}>Artist Signup</Link>
                    <Link to={'/artists'} style={{ textDecoration: 'none', color: 'white' }}>Artists</Link>
                </Header>
                <P>Welcome to Rising Stars!</P>

                <P2>Our site offers talented individuals in the fields of Modeling, Acting, And Musicians to upload
                    their content into a profile which will allow Talent Agencies across the world to view their
                    potential as well as display a bio with contact information for possible hirings! Sign up now!
                </P2>
                <Count>
                    <Counter />
                </Count>
            </Body>
        );
    }
}

export default Home;