import React, { Component } from 'react';
import axios from 'axios';
import Actor from './Actor';
import styled from 'styled-components'
import { Link } from "react-router-dom"


// ArtistList Component

class ActorList extends Component {
    state = {
        actorInfo: []
    }

    componentDidMount() {
        this.getActors()
    }

    getActors = () => {
        axios.get('/api/v1/actor').then((res) => {
            this.setState({ actorInfo: res.data })
        })
    }

    render() {
        return (
            <div>
                <Body>
                <Header>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>HOME</Link>
                        <Link to={'/model'} style={{ textDecoration: 'none', color: 'white' }}>Model Signup</Link>
                        <Link to={'/models'} style={{ textDecoration: 'none', color: 'white' }}>Models</Link>
                        <Link to={'/actor'} style={{ textDecoration: 'none', color: 'white' }}>Actor Signup</Link>
                        <Link to={'/actors'} style={{ textDecoration: 'none', color: 'white' }}>Actors</Link>
                        <Link to={'/artist'} style={{ textDecoration: 'none', color: 'white' }}>Artist Signup</Link>
                        <Link to={'/artists'} style={{ textDecoration: 'none', color: 'white' }}>Artists</Link>
                    </Header>
                    {this.state.actorInfo.map((spot, index) => {
                        return (

                            <Actor
                                key={index}
                                name={spot.name}
                                dob={spot.dob}
                                ethnicity={spot.ethnicity}
                                location={spot.location}
                                _id={spot._id}
                                getActors={this.getActors}
                            />
                        )

                    })}
                </Body>
            </div>
        );
    }
}

export default ActorList;