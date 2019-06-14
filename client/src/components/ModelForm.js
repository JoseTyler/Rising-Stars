import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';

const Header = styled.div`
    font-size: 30px;
    position: center;
    display: flex;
    justify-content:space-evenly;
    width: 50vw;
    color:solid white;
    font-family: Gobold High;
    `;


const Button = styled.button`
    height:20px;
    font-size: 15px;
    background-color: blue;
    position: relative;
    `;

const Input = styled.div`
    display:flex;

`;

// ModelForm Component

class ModelForm extends Component {
    state = {
        formInfo: {
            name: '',
            dob: '',
            ethnicity: '',
            location: '',
            photo1: '',
            photo2: '',
            photo3: '',
            photo4: ''
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
        console.log(this.state.formInfo)
        axios.post("/api/v1/model/", this.state.formInfo)
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/models" />
        }
        return (
            <div>
                <body>
                    <Header>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                        <Link to={'/model'} style={{ textDecoration: 'none', color: 'black' }}>Model Signup</Link>
                        <Link to={'/models'} style={{ textDecoration: 'none', color: 'black' }}>Models</Link>
                        <Link to={'/actor'} style={{ textDecoration: 'none', color: 'black' }}>Actor Signup</Link>
                        <Link to={'/actors'} style={{ textDecoration: 'none', color: 'black' }}>Actors</Link>
                        <Link to={'/artist'} style={{ textDecoration: 'none', color: 'black' }}>Artist Signup</Link>
                        <Link to={'/artists'} style={{ textDecoration: 'none', color: 'black' }}>Artists</Link>
                    </Header>

                    <form onSubmit={this.newModel}>
                        <Input>
                            <label htmlFor="name">Name:</label>
                            <input id="name" name="name" type="text" placeholder="Ex: Jesus Santos" onChange={this.handleChange} />
                            <label htmlFor="dob">DOB:</label>
                            <input id="dob" name="dob" placeholder="Ex: 7/12/2010" type="text" onChange={this.handleChange} />
                            <label htmlFor="ethnicity">Ethnicity:</label>
                            <input id="ethnicity" name="ethnicity" type="text" placeholder="Ex: White" onChange={this.handleChange} />
                            <label htmlFor="location">Location:</label>
                            <input id="location" name="location" type="text" placeholder="Ex: Houston, Tx" onChange={this.handleChange} />
                        </Input>
                        <Photos>
                            <label htmlFor="photo1">Photo 1:</label>
                            <input id="photo1" name="photo1" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                            <label htmlFor="photo2">Photo 2:</label>
                            <input id="photo2" name="photo2" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                            <label htmlFor="photo3">Photo 3:</label>
                            <input id="photo3" name="photo3" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                            <label htmlFor="photo4">Photo 4:</label>
                            <input id="photo4" name="photo4" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                        </Photos>
                        <Button type="submit">Sign Up Model!</Button>
                    </form>
                </body>
            </div>
        );
    }
}

export default ModelForm;
