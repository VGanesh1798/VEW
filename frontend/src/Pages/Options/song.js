import React from "react";
import { Segment, Header, Divider, Form, Button } from "semantic-ui-react";
import axios from "axios";

export default class SongOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            id: "",
            rel: "",
            song: "",
            genre: "",
            lenth: "",
            year: "",
            feat: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/addsong", {
            id: this.state.id,
            rel: this.state.rel,
            song: this.state.song,
            genre: this.state.genre,
            length: this.state.lenth,
            year: this.state.year
        })
        .then((response) => {
            console.log(response.data);
            alert("Added " + this.state.song + " to " + this.state.rel);
        })
    }

    removeSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/delsong", {
            id: this.state.id,
            rel: this.state.rel,
            song: this.state.song
        })
        .then((response) => {
            console.log(response.data);
            alert("Removed " + this.state.song + " from " + this.state.rel);
        })
    }

    featSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/addfeat", {
            aid: this.state.id,
            rel: this.state.rel,
            song: this.state.song,
            fid: this.state.feat,
            year: this.state.year
        })
        .then((response) => {
            console.log(response.data);
            alert("Added a featured artist to " + this.state.song);
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    makeChoice = () => {
        if(this.state.choice === "add") {
            return (
                <Segment inverted>
                    <Header as="h3">Add Song</Header>
                    <Form inverted onSubmit={this.handleSubmit}>
                        <Form.Input required label="Artist ID" name="id" placeholder="ID" type="number" value={this.state.id} onChange={this.handleChange} />
                        <Form.Input required label="Release Name" name="rel" placeholder="Release" value={this.state.rel} onChange={this.handleChange} />
                        <Form.Input required label="Song Title" name="song" placeholder="Song" value={this.state.song} onChange={this.handleChange} />
                        <Form.Input label="Genre" name="genre" placeholder="Genre" value={this.state.genre} onChange={this.handleChange} />
                        <Form.Input required label="Length (float)" name="lenth" placeholder="Length" value={this.state.lenth} onChange={this.handleChange} />
                        <Form.Input label="Year" name="year" placeholder="Year" type="number" value={this.state.year} onChange={this.handleChange} />
                        <Button type="submit" color="green">Add</Button>  
                    </Form>
                </Segment>
            );
        }
        else if(this.state.choice === "del") {
            return (
                <Segment inverted>
                    <Header as="h3">Delete Song</Header>
                    <Form inverted onSubmit={this.removeSubmit}>
                        <Form.Input label="Artist ID" name="id" placeholder="ID" type="number" value={this.state.id} onChange={this.handleChange} />
                        <Form.Input label="Release Name" name="rel" placeholder="Release" value={this.state.rel} onChange={this.handleChange} />
                        <Form.Input label="Song Title" name="song" placeholder="Song" value={this.state.song} onChange={this.handleChange} />
                        <Button type="submit" color="red">Delete</Button>
                    </Form>
                </Segment>
            );
        }
        else if(this.state.choice === "feat") {
            return (
                <Segment inverted>
                    <Header as="h3">Add Feature</Header>
                    <Form inverted onSubmit={this.featSubmit}>
                        <Form.Input required label="Artist ID" name="id" placeholder="AID" type="number" value={this.state.id} onChange={this.handleChange} />
                        <Form.Input required label="Release Name" name="rel" placeholder="Release" value={this.state.rel} onChange={this.handleChange} />
                        <Form.Input required label="Song Title" name="song" placeholder="Song" value={this.state.song} onChange={this.handleChange} />
                        <Form.Input required label="Feature ID" name="feat" placeholder="FID" type="number" value={this.state.feat} onChange={this.handleChange} />
                        <Form.Input required label="Year" name="year" placeholder="Year" type="number" value={this.state.year} onChange={this.handleChange} />
                        <Button type="submit" color="teal">Add</Button>
                    </Form>
                </Segment>
            );
        }
    }

    render() {
        return (
            <Segment inverted>
                <Header as="h2">Song Options</Header>
                <p>
                    Add songs to releases if you want.
                </p>
                <Divider />
                <Segment inverted>
                    <Button color="green" onClick={() => this.setState({choice: "add"})}>Add Song</Button>
                    <Button color="red" onClick={() => this.setState({choice: "del"})}>Delete Song</Button>
                    <Button color="teal" onClick={() => this.setState({choice: "feat"})}>Add Feature</Button>
                </Segment>
                <Divider />
                <Segment inverted>
                    {this.makeChoice()}
                </Segment>
            </Segment>
        );
    }
}