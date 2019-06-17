import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';
import img from '../images/actorform.jpg'

const Body = styled.div`
    background-image: url(${img});
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
    background-color: white;
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
    margin-right:750px;
    `;

const Input = styled.div`
    display:flex;
    justify-content: center;
    padding: 30px;
`;

const Photos = styled.div`
    display:flex;
    justify-content: center;
    padding: 30px;

`;




// ActorForm Component
class ActorForm extends Component {
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

    newActor = (e) => {
        e.preventDefault()
        axios.post("api/v1/actor", this.state.formInfo)
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/actors" />
        }
        return (
            
                <Body>
                    <Header>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                        <Link to={'/model'} style={{ textDecoration: 'none', color: 'white' }}>Model Signup</Link>
                        <Link to={'/models'} style={{ textDecoration: 'none', color: 'white' }}>Models</Link>
                        <Link to={'/actor'} style={{ textDecoration: 'none', color: 'white' }}>Actor Signup</Link>
                        <Link to={'/actors'} style={{ textDecoration: 'none', color: 'white' }}>Actors</Link>
                        <Link to={'/artist'} style={{ textDecoration: 'none', color: 'white' }}>Artist Signup</Link>
                        <Link to={'/artists'} style={{ textDecoration: 'none', color: 'white' }}>Artists</Link>
                    </Header>

                    <Form onSubmit={this.newActor}>
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
                        <Button type="submit">Sign Up Actor!</Button>
                    </Form>
                </Body>
            
        );
    }
}

export default ActorForm;
