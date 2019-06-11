import React, { Component } from 'react';
import axios from 'axios';
import Artist from './Artist';
import styled from 'styled-components'
import { Link } from "react-router-dom"




// ArtistList Component

class ArtistList extends Component {
    state = {
        artistInfo: []
    }

    componentDidMount() {
        this.getArtists()
    }

    getArtists = () => {
        axios.get('/api/v1/artist').then((res) => {
            this.setState({ artistInfo: res.data })
        })
    }

    render() {
        return (
            <div>
                <body>
                <header>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
                        <Link to={'/model'} style={{ textDecoration: 'none', color: 'white' }}>Model Signup</Link>
                        <Link to={'/models'} style={{ textDecoration: 'none', color: 'white' }}>Models</Link>
                        <Link to={'/actor'} style={{ textDecoration: 'none', color: 'white' }}>Actor Signup</Link>
                        <Link to={'/actors'} style={{ textDecoration: 'none', color: 'white' }}>Actors</Link>
                        <Link to={'/artist'} style={{ textDecoration: 'none', color: 'white' }}>Artist Signup</Link>
                        <Link to={'/artists'} style={{ textDecoration: 'none', color: 'white' }}>Artists</Link>
                    </header>
                    {this.state.artistInfo.map((spot, index) => {
                        return (

                            <Artist
                                key={index}
                                name={spot.name}
                                dob={spot.dob}
                                ethnicity={spot.ethnicity}
                                location={spot.location}
                                _id={spot._id}
                                getArtists={this.getArtists}
                            />
                        )

                    })}
                </body>
            </div>
        );
    }
}

export default ArtistList;