import React, { Component } from 'react';
import axios from 'axios';
import Artist from './Artist';
import styled from 'styled-components'
import { Link } from "react-router-dom"


// ArtistList Component Styling
const Body = styled.div`
    background-color: orange;
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

const Art = styled.div`
    text-align: center;
    padding-top: 40px;
    `;



// ArtistList Component
class ArtistList extends Component {
    state = {
        artistInfo: []
    }

    componentDidMount() {
        this.getArtists()
    }

    getArtists = () => {
        axios.get('/api/v1/artist/').then((res) => {
            this.setState({ artistInfo: res.data })
        })
    }

    render() {
        return (
            <Body>
                
                    <Header>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'red' }}>Home</Link>
                        <Link to={'/model'} style={{ textDecoration: 'none', color: 'red' }}>Model Signup</Link>
                        <Link to={'/models'} style={{ textDecoration: 'none', color: 'red' }}>Models</Link>
                        <Link to={'/actor'} style={{ textDecoration: 'none', color: 'red' }}>Actor Signup</Link>
                        <Link to={'/actors'} style={{ textDecoration: 'none', color: 'red' }}>Actors</Link>
                        <Link to={'/artist'} style={{ textDecoration: 'none', color: 'red' }}>Artist Signup</Link>
                        <Link to={'/artists'} style={{ textDecoration: 'none', color: 'red' }}>Artists</Link>
                    </Header>
                    {this.state.artistInfo.map((spot, index) => {
                        return (
                            <Art>
                            <Artist
                                key={index}
                                name={spot.name}
                                dob={spot.dob}
                                genre={spot.genre}
                                location={spot.location}
                                _id={spot._id}
                                photo={spot.photo}
                                getArtists={this.getArtists}
                            />
                            </Art>
                        )

                    })}
                
            </Body>
        );
    }
}

export default ArtistList;