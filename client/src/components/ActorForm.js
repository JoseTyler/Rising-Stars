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
    border: solid white;
    height: 30px;
    font-size: 20px;
    background-color: orange;
    text-align: center; 
    margin: 0 auto;
    display: block;
    `;

const P = styled.div`
    padding-top: 50px;
    padding-bottom: 30px;
    padding-right: 600px; 
    font-size: 50px;
    position: center;
    display: flex;
    justify-content: space-evenly;
    color: white;
    font-family: Gobold High;
    `;

const Form = styled.form`
    border: solid white;
    height: 22vh;
    margin-left:150px;
    margin-right:750px;
    `;

const Row1 = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;   
`;

const Row2 = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
`;

const Row3 = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
`;

const Row4 = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 30px;

`;

const Label = styled.div`
    color: white;

`;

const Input = styled.input`
    width: 300px;

`;



// ActorForm Component
class ActorForm extends Component {
    state = {
        formInfo: {
            name: '',
            dob: '',
            ethnicity: '',
            location: '',
            photo1: '',
            photo2: '',
            url: '',
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

                    <P>
                    Fill out the form below to sign up!
                    </P>

                    <Form onSubmit={this.newActor}>
                    <Row1>
                        <Label htmlFor="photo1">Photo 1:&nbsp;</Label>
                        <input id="photo1" name="photo1" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        <Label htmlFor="photo2">Photo 2:&nbsp;</Label>
                        <input id="photo2" name="photo2" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                    </Row1>
                    <Row2>
                        <Label htmlFor="name">Name: &nbsp;</Label>
                        <input id="name" name="name" type="text" placeholder="Ex: Jesus Santos" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        <Label htmlFor="dob">DOB:&nbsp;</Label>
                        <input id="dob" name="dob" placeholder="Ex: 7/12/2010" type="text" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                    </Row2>
                    <Row3>
                        <Label htmlFor="ethnicity">Ethnicity:&nbsp;</Label>
                        <input id="ethnicity" name="ethnicity" type="text" placeholder="Ex: White" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        <Label htmlFor="location">Location:&nbsp;</Label>
                        <input id="location" name="location" type="text" placeholder="Ex: Houston, Tx" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                    </Row3>
                    <Row4>
                        <Label htmlFor="url">Video URL:&nbsp; </Label>
                        <Input id="url" name ="url" type="text" placeholder="Ex. Youtube.com/sample" onChange={this.handleChange}/>
                        
                    </Row4>
                        <Button type="submit">Sign Up Actor!</Button>
                    </Form>
                </Body>
            
        );
    }
}

export default ActorForm;
