import React, { Component } from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"
import Counter from "./Counter"
import img from "../images/home.png"
import GoboldHigh from '../fonts/GoboldHigh.otf'
import BlackLabel from '../fonts/BlackLabel.ttf'

// Home Component Styling
const Body = styled.div`
    background-image: url(${img});
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    background-color: lightblue;
    height: 100vh;
    padding-top: 20px;
     
`;

const Header = styled.div`
    font-size: 30px;
    position: center;
    display: flex;
    justify-content: space-between;
    width: 40vw;
    font-family: ${GoboldHigh};
    margin: 0 auto;
    `;

const P = styled.div`
    padding-bottom: 38px;
    padding-top: 150px;
    font-size: 30px;
    position: center;
    display: flex;
    justify-content:space-evenly;
    color: white;
    font-family: ${GoboldHigh};
    `;

const P2 = styled.div`
    padding-left: 500px;
    padding-right: 500px;
    padding-bottom: 34px;
    font-size: 16px;
    position: center;
    display: flex;
    justify-content:space-evenly;
    color: white;
    font-family: ${BlackLabel};
    text-align: center;
    line-height: 1.5;
    `;

const Count = styled.div`
    text-align: center;
    font-family: Headline One;
    font-size: 20px;
    `;


// Home Component
class Home extends Component {
    render() {
        return (
            <Body>
                <Header>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    {/* <Link to={'/model'} style={{ textDecoration: 'none', color: 'white' }}>Model Signup</Link> */}
                    <Link to={'/models'} style={{ textDecoration: 'none', color: 'white' }}>Models</Link>
                    {/* <Link to={'/actor'} style={{ textDecoration: 'none', color: 'white' }}>Actor Signup</Link> */}
                    <Link to={'/actors'} style={{ textDecoration: 'none', color: 'white' }}>Actors</Link>
                    {/* <Link to={'/artist'} style={{ textDecoration: 'none', color: 'white' }}>Artist Signup</Link> */}
                    <Link to={'/artists'} style={{ textDecoration: 'none', color: 'white' }}>Artists</Link>
                </Header>
                <P>Welcome Rising Stars!</P>

                <P2>Our site offers talented individuals in the fields of Modeling, Acting, And Musicians to upload
                    their content onto a profile which will allow Talent Agencies across the world to view their
                    potential for possible hirings! Sign up now!
                </P2>
                <Count>
                    <Counter/>
                </Count>
            </Body>
        );
    }
}

export default Home;