import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';
import img from '../images/singer.jpg'


// ArtistForm Component Styling
const Body = styled.div`
    background-image: url(${img});
    background-color: yellow;
    background-size: cover;
    padding-top: 20px;
    width: 100vw;
    height: 100vh;
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
    border: solid black;
    height:30px;
    font-size: 20px;
    background-color: red;
    text-align: center; 
    margin: 0 auto;
    display: block;
    `;

const P = styled.div`
    padding:50px; 
    padding-right: 750px;
    font-size: 50px;
    position: center;
    display: flex;
    justify-content:space-evenly;
    color:solid white;
    font-family: Gobold High;
    `;

const Form = styled.form`
    border: solid black;
    margin-left:125px;
    margin-right:825px;
    height: 18vh;
    `;

const Row1 = styled.div`
    display:flex;
    justify-content: center;
    padding-top: 20px;  
    `;

const Row2 = styled.div`
    display:flex;
    justify-content: center;
    padding-top: 20px;
    `;

const Row3 = styled.div`
    display:flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 30px;
    `;


// ArtistForm Component
class ArtistForm extends Component {
    state = {
        formInfo: {
            name: '',
            dob: '',
            genre: '',
            location: '',
            photo: '',
            link:''
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
                    <P>
                    Fill out the form below to sign up!
                    </P>
                    <Form onSubmit={this.newArtist}>
                        <Row1>
                        <label htmlFor="name">Name:&nbsp;</label>
                        <input id="name" name="name" type="text" placeholder="Ex: Jesus Santos" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        <label htmlFor="dob">DOB:&nbsp;</label>
                        <input id="dob" name="dob" placeholder="Ex: 7/12/2010" type="text" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        </Row1>
                        <Row2>
                        <label htmlFor="genre">Genre:&nbsp;</label>
                        <input id="genre" name="genre" type="text" placeholder="Ex: Hip Hop" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        <label htmlFor="location">Location:&nbsp;</label>
                        <input id="location" name="location" type="text" placeholder="Ex: Houston, Tx" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        </Row2>
                        <Row3>
                        <label htmlFor="photo">Photo:&nbsp;</label>
                        <input id="photo" name="photo" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        <label htmlFor="link">Music:&nbsp;</label>
                        <input id="link" name="link" type="text" placeholder="Ex: MusicUrl" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        </Row3>
                        <Button type="submit">Sign Up Artist!</Button>
                    </Form>
                </Body>
            
        );
    }
}

export default ArtistForm;
