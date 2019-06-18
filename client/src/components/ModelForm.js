import React, { Component } from 'react';
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import styled from 'styled-components';
import img from '../images/modelform.jpg'


// ModelForm Component Styling
const Body = styled.div`
    background-image: url(${img});
    background-color: red;
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
    height:30px;
    font-size: 20px;
    background-color: turquoise;
    text-align: center; 
    margin: 0 auto;
    display: block;
    `;

const P = styled.div`
    position: center;
    display: flex;
    justify-content:space-evenly;
    padding-top: 50px;
    padding-bottom:30px;
    padding-left:600px; 
    font-size: 50px;
    color:solid white;
    font-family: Gobold High;
    `;

const Form = styled.form`
    border: solid white;
    margin-left: 750px;
    margin-right: 150px;
    height: 21vh;
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
`;

const Row4 = styled.div`
    display:flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
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
            <Body>
                <Header>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                    <Link to={'/model'} style={{ textDecoration: 'none', color: 'black' }}>Model Signup</Link>
                    <Link to={'/models'} style={{ textDecoration: 'none', color: 'black' }}>Models</Link>
                    <Link to={'/actor'} style={{ textDecoration: 'none', color: 'black' }}>Actor Signup</Link>
                    <Link to={'/actors'} style={{ textDecoration: 'none', color: 'black' }}>Actors</Link>
                    <Link to={'/artist'} style={{ textDecoration: 'none', color: 'black' }}>Artist Signup</Link>
                    <Link to={'/artists'} style={{ textDecoration: 'none', color: 'black' }}>Artists</Link>
                </Header>
                <P>
                    Fill out the form below to sign up!
                    </P>

                <Form onSubmit={this.newModel}>

                    <Row1>
                        <label htmlFor="photo1">Photo 1:&nbsp;</label>
                        <input id="photo1" name="photo1" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        <label htmlFor="photo2">Photo 2:&nbsp;</label>
                        <input id="photo2" name="photo2" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                    </Row1>
                    <Row2>
                        <label htmlFor="photo3">Photo 3:&nbsp;</label>
                        <input id="photo3" name="photo3" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        <label htmlFor="photo4">Photo 4:&nbsp;</label>
                        <input id="photo4" name="photo4" type="text" placeholder="Ex: photoUrl" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                    </Row2>

                    <Row3>
                        <label htmlFor="name">Name: &nbsp;</label>
                        <input id="name" name="name" type="text" placeholder="Ex: Jesus Santos" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        <label htmlFor="dob">DOB:&nbsp;</label>
                        <input id="dob" name="dob" placeholder="Ex: 7/12/2010" type="text" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                    </Row3>
                    <Row4>
                        <label htmlFor="ethnicity">Ethnicity:&nbsp;</label>
                        <input id="ethnicity" name="ethnicity" type="text" placeholder="Ex: White" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                        <label htmlFor="location">Location:&nbsp;</label>
                        <input id="location" name="location" type="text" placeholder="Ex: Houston, Tx" onChange={this.handleChange} />
                        &nbsp; &nbsp; &nbsp;
                    </Row4>
                    <Button type="submit">Sign Up Model!</Button>
                </Form>
            </Body >
        );
    }
}

export default ModelForm;
