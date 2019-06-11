import React, { Component } from 'react';
import axios from 'axios';
import Actor from './Actor';
import styled from 'styled-components'
import { Link } from "react-router-dom"




// ActorList Component

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
                Im the actor list
                    <header>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'red' }}>Home</Link>
                        <Link to={'/model'} style={{ textDecoration: 'none', color: 'red' }}>Model Signup</Link>
                        <Link to={'/models'} style={{ textDecoration: 'none', color: 'red' }}>Models</Link>
                        <Link to={'/actor'} style={{ textDecoration: 'none', color: 'red' }}>Actor Signup</Link>
                        <Link to={'/actors'} style={{ textDecoration: 'none', color: 'red' }}>Actors</Link>
                        <Link to={'/artist'} style={{ textDecoration: 'none', color: 'red' }}>Artist Signup</Link>
                        <Link to={'/artists'} style={{ textDecoration: 'none', color: 'red' }}>Artists</Link>
                    </header>
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
            
            </div>
        );
    }
}

export default ActorList;