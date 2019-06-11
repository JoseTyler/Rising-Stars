import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';



// ModelForm Component

class ModelForm extends Component {
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

    newModel = (e) => {
        e.preventDefault()
        axios.post("api/v1/", this.state.formInfo)
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/models" />
        }
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

                    <form onSubmit={this.newModel}>
                        <label htmlFor="name">Name:</label>
                        <inputy id="name" name="name" type="text" placeholder="Ex: Jesus Santos" onChange={this.handleChange} />
                        <label htmlFor="dob">DOB:</label>
                        <inputy id="dob" name="dob" placeholder="Ex: 7/12/2010" type="text" onChange={this.handleChange} />
                        <label htmlFor="Ethnicity">Ethnicity:</label>
                        <inputy id="Ethnicity" name="Ethnicity" type="text" placeholder="Ex: White" onChange={this.handleChange} />
                        <label htmlFor="Location">Location:</label>
                        <inputy id="Location" name="Location" type="text" placeholder="Ex: Houston, Tx" onChange={this.handleChange} />
                        <button type="submit">Sign Up Model!</button>
                    </form>
                </body>
            </div>
        );
    }
}

export default ModelForm;
