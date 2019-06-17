import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';
import img from '../images/artistform.jpg'


const Body = styled.div`
    background-image: url(${img});
    background-color: yellow;
    background-size: cover;
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

const Button = styled.button`
    height:30px;
    font-size: 20px;
    background-color: green;
    text-align: center; 
    margin: 0 auto;
    display: block;
    `;

const P = styled.div`
    padding:100px; 
    font-size: 50px;
    position: center;
    display: flex;
    justify-content:space-evenly;
    color:solid white;
    font-family: Gobold High;
    `;

const Form = styled.form`
    border: solid black;
    padding:70px;
    margin-left:150px;
    margin-right:150px;
    `;


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

                    <Form onSubmit={this.newArtist}>
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
                        <Button type="submit">Sign Up Model!</Button>
                    </Form>
                </Body>
            
        );
    }
}

export default ArtistForm;
