import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'


const Button = styled.button`
    border: solid black;
    height:30px;
    font-size: 20px;
    background-color: red;
    `;

// Artist Component
class Artist extends Component {
    state = {
        showForm: false,
        formInfo: {
            name: '',
            dob: '',
            genre: '',
            location: '',
            photo: '',
            link: '',
            _id: ''
        }
    }
    componentDidMount() {
        let copyOfFormInfo = this.state.formInfo
        copyOfFormInfo.name = this.props.name
        copyOfFormInfo.dob = this.props.dob
        copyOfFormInfo.genre = this.props.genre
        copyOfFormInfo.location = this.props.location
        copyOfFormInfo.photo = this.props.photo
        copyOfFormInfo.link = this.props.link
        copyOfFormInfo._id = this.props._id
        this.setState({
            formInfo: copyOfFormInfo
        })
    }

    deleteArtist = () => {
        console.log(this.props._id)
        axios.delete(`api/v1/artist/${this.props._id}`)
        this.props.getArtists()
    }

    updateArtist = (e) => {
        e.preventDefault()
        console.log(this.state.formInfo)
        axios.put(`/api/v1/artist/${this.props._id}`, this.state.formInfo)
        this.swapForm()
        this.props.getArtists()
    }

    handleChange = (e) => {
        const copyOfFormInfo = { ...this.state.formInfo }
        copyOfFormInfo[e.target.name] = e.target.value
        this.setState({ formInfo: copyOfFormInfo })
    }

    swapForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    render() {
        return (
            <div>
                {this.state.showForm
                    ? <form onSubmit={this.updateArtist}>
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" type="text" placeholder={this.props.name} onChange={this.handleChange} />
                        <label htmlFor="dob">DOB:</label>
                        <input id="dob" name="dob" type="text" placeholder={this.props.dob} onChange={this.handleChange} />
                        <label htmlFor="genre">Genre:</label>
                        <input id="genre" name="genre" type="text" placeholder={this.props.ethnicity} onChange={this.handleChange} />
                        <label htmlFor="location">Location:</label>
                        <input id="location" name="location" type="text" placeholder={this.props.location} onChange={this.handleChange} />
                        <button onClick={this.setState.swapForm} >Submit Edit!</button>
                    </form>
                    : <info>
                        <p>Name: {this.props.name}</p>
                        <p>DOB: {this.props.dob}</p>
                        <p>Genre: {this.props.genre}</p>
                        <p>Location: {this.props.location}</p>
                        <p>Photo:</p>
                        <img width="453" height="280" src={this.props.photo} />
                        <p>Music:</p>
                        <a href={this.props.link} />
                        <Button onClick={this.swapForm}>Edit Artist</Button>
                        <Button onClick={this.deleteArtist}>Delete Artist</Button>
                    </info>
                }
            </div>
        );
    }
}

export default Artist;