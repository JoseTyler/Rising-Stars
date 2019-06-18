import React, { Component } from 'react';
import axios from 'axios';
import Model from './Model';
import styled from 'styled-components'
import { Link } from "react-router-dom"
import img from '../images/soft.jpg'

const Body = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-color: skyblue;
    height: 100vh;
    width: 100vw;  
    padding-top: 20px; 
    top: 0;
    position: sticky;
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

const Mode = styled.div`
    text-align: center;
    padding-top: 40px;


`;


// ModelList Component

class ModelList extends Component {
    state = {
        modelInfo: []
    }

    componentDidMount() {
        this.getModels()
    }

    getModels = () => {
        axios.get('/api/v1/model/').then((res) => {
            this.setState({ modelInfo: res.data })
        })
    }

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
                {this.state.modelInfo.map((spot, index) => {
                    return (
                        <Mode>
                        <Model
                            key={index}
                            name={spot.name}
                            dob={spot.dob}
                            ethnicity={spot.ethnicity}
                            location={spot.location}
                            photo1={spot.photo1}
                            photo2={spot.photo2}
                            photo3={spot.photo3}
                            photo4={spot.photo4}
                            _id={spot._id}
                            getModels={this.getModels}
                        />
                        </Mode>
                    )

                })}

            </Body>
        );
    }
}

export default ModelList;