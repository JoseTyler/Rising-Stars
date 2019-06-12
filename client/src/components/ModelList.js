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
        axios.get('/api/v1/model/').then((res) => {
            this.setState({ modelInfo: res.data })
        })
    }

    render() {
        return (
            <div>
                im the model list

                <header>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'red' }}>Home</Link>
                    <Link to={'/model'} style={{ textDecoration: 'none', color: 'red' }}>Model Signup</Link>
                    <Link to={'/models'} style={{ textDecoration: 'none', color: 'red' }}>Models</Link>
                    <Link to={'/actor'} style={{ textDecoration: 'none', color: 'red' }}>Actor Signup</Link>
                    <Link to={'/actors'} style={{ textDecoration: 'none', color: 'red' }}>Actors</Link>
                    <Link to={'/artist'} style={{ textDecoration: 'none', color: 'red' }}>Artist Signup</Link>
                    <Link to={'/artists'} style={{ textDecoration: 'none', color: 'red' }}>Artists</Link>
                </header>
                {this.state.modelInfo.map((spot, index) => {
                    return (

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
                    )

                })}

            </div>
        );
    }
}

export default ModelList;