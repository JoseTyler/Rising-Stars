import React, { Component } from 'react';
import axios from 'axios';
import Model from './Model';
import styled from 'styled-components'
import { Link } from "react-router-dom"




// ModelList Component

class ModelList extends Component {
    state = {
        modelInfo: []
    }

    componentDidMount() {
        this.getModels()
    }

    getModels = () => {
        axios.get('/api/v1/').then((res) => {
            this.setState({ modelInfo: res.data })
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
                    {this.state.modelInfo.map((spot, index) => {
                        return (

                            <Model
                                key={index}
                                name={spot.name}
                                dob={spot.dob}
                                ethnicity={spot.ethnicity}
                                location={spot.location}
                                _id={spot._id}
                                getModels={this.getModels}
                            />
                        )

                    })}
                </body>
            </div>
        );
    }
}

export default ModelList;