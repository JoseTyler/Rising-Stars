import React, { Component } from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"


const Body = styled.div`
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
    color:solid white;
    font-family: Gobold High;
    margin: 0 auto;
    `;

const P = styled.div`
font-size: 30px;
position: center;
display: flex;
justify-content:space-evenly;
color:solid white;
font-family: Gobold High;
`;

class Home extends Component {
    render() {
        return (
            <Body>
                <Header>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                    <Link to={'/model'} style={{ textDecoration: 'none', color: 'black' }}>Model Signup</Link>
                    <Link to={'/models'} style={{ textDecoration: 'none', color: 'black' }}>Models</Link>
                    <Link to={'/actor'} style={{ textDecoration: 'none', color: 'black' }}>Actor Signup</Link>
                    <Link to={'/actors'} style={{ textDecoration: 'none', color: 'black' }}>Actors</Link>
                    <Link to={'/artist'} style={{ textDecoration: 'none', color: 'black' }}>Artist Signup</Link>
                    <Link to={'/artists'} style={{ textDecoration: 'none', color: 'black' }}>Artists</Link>
                </Header>
                <P>Welcome to Rising Stars etc......</P>
            </Body>
        );
    }
}

export default Home;