import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';





// ArtistForm Component
class ArtistForm extends Component {
    state = {
        formInfo: {
            name: '',
            dob: '',
            ethnicity: '',
            location: '',
            photo: ''
        },
        redirect: false,
    }

    handleChange = (e) => {
        const copyOfFormInfo = { ...this.state.formInfo }
        copyOfFormInfo[e.target.name] = e.target.value
        this.setState({ formInfo: copyOfFormInfo })
    }

    newArtist = (e) => {
        e.preventDefault()
        axios.post("api/v1/artist", this.state.formInfo)
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/artists" />
        }
        return (
            <div>
                <body>
                    <header>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'red' }}>Home</Link>
                        <Link to={'/model'} style={{ textDecoration: 'none', color: 'red' }}>Model Signup</Link>
                        <Link to={'/models'} style={{ textDecoration: 'none', color: 'red' }}>Models</Link>
                        <Link to={'/actor'} style={{ textDecoration: 'none', color: 'red' }}>Actor Signup</Link>
                        <Link to={'/actors'} style={{ textDecoration: 'none', color: 'red' }}>Actors</Link>
                        <Link to={'/artist'} style={{ textDecoration: 'none', color: 'red' }}>Artist Signup</Link>
                        <Link to={'/artists'} style={{ textDecoration: 'none', color: 'red' }}>Artists</Link>
                    </header>

                    <form onSubmit={this.newArtist}>
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" type="text" placeholder="Ex: Jesus Santos" onChange={this.handleChange} />
                        <label htmlFor="dob">DOB:</label>
                        <input id="dob" name="dob" placeholder="Ex: 7/12/2010" type="text" onChange={this.handleChange} />
                        <label htmlFor="ethnicity">Ethnicity:</label>
                        <input id="ethnicity" name="ethnicity" type="text" placeholder="Ex: White" onChange={this.handleChange} />
                        <label htmlFor="location">Location:</label>
                        <input id="location" name="location" type="text" placeholder="Ex: Houston, Tx" onChange={this.handleChange} />
                        <label htmlFor="photo">Photo:</label>
                        <input id="photo" name="photo" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                        <button type="submit">Sign Up Model!</button>
                    </form>
                </body>
            </div>
        );
    }
}

export default ArtistForm;
