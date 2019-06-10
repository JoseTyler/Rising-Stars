import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';

// SquadForm Component

class ArtistForm extends Component {
    state = {
        formInfo: {
            name: '',
            dob: '',
            ethnicity: '',
            location: ''
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

                    <Form onSubmit={this.newArtist}>
                        <label htmlFor="name">Name:</label>
                        <Inputy id="name" name="name" type="text" placeholder="Ex: Jesus Santos" onChange={this.handleChange} />
                        <label htmlFor="dob">DOB:</label>
                        <Inputy id="dob" name="dob" placeholder="Ex: 7/12/2010" type="text" onChange={this.handleChange} />
                        <label htmlFor="Ethnicity">Ethnicity:</label>
                        <Inputy id="Ethnicity" name="Ethnicity" type="text" placeholder="Ex: White" onChange={this.handleChange} />
                        <label htmlFor="Location">Location:</label>
                        <Inputy id="Location" name="Location" type="text" placeholder="Ex: Houston, Tx" onChange={this.handleChange} />
                        <Button type="submit">Sign Up Model!</Button>
                    </Form>
                </Body>
            </div>
        );
    }
}

export default ArtistForm;
