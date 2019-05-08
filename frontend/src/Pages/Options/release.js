import React from "react";
import { Segment, Header, Divider, Form, Button } from "semantic-ui-react";
import axios from "axios";

export default class ReleaseOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            id: "",
            rel: "",
            genre: "",
            type: "",
            year: "",
            label: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/addrel", {
            id: this.state.id,
            rel: this.state.rel,
            genre: this.state.genre,
            type: this.state.type,
            year: this.state.year,
            label: this.state.label
        })
        .then((response) => {
            console.log(response.data);
            this.props.history.push('/home');
        })
        
    }

    removeSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/delrel", {
            id: this.state.id,
            rel: this.state.rel
        })
        .then((response) => {
            console.log(response.data);
            this.props.history.push('/home');
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    makeChoice = () => {
        if(this.state.choice === "add") {
            return (
                <Segment inverted>
                    <Header as="h3">Add Release</Header>
                    <Form inverted onSubmit={this.handleSubmit}>
                        <Form.Input required label="Artist ID" name="id" placeholder="ID" type="number" value={this.state.id} onChange={this.handleChange} />
                        <Form.Input required label="Release Name" name="rel" placeholder="Release" value={this.state.rel} onChange={this.handleChange} />
                        <Form.Input label="Genre" name="genre" placeholder="genre" value={this.state.genre} onChange={this.handleChange} />
                        <Form.Input label="Release Type" name="type" placeholder="Type" value={this.state.type} onChange={this.handleChange} />
                        <Form.Input label="Release Year" name="year" placeholder="Year" type="number" value={this.state.year} onChange={this.handleChange} />
                        <Form.Input label="Label" name="label" placeholder="Label" value={this.state.label} onChange={this.handleChange} />
                        <Button type="submit" color="green">Add</Button>
                    </Form>
                </Segment>
            );
        }
        else if(this.state.choice === "del") {
            return (
                <Segment inverted>
                    <Header as="h3">Delete Release</Header>
                    <Form inverted onSubmit={this.removeSubmit}>
                        <Form.Input label="Artist ID" name="id" placeholder="ID" type="number" value={this.state.id} onChange={this.handleChange} />
                        <Form.Input label="Release Name" name="rel" placeholder="Release" value={this.state.rel} onChange={this.handleChange} />
                        <Button type="submit" color="red">Delete</Button>
                    </Form>
                </Segment>
            );
        }
    }

    render() {
        return (
            <Segment inverted>
                <Header as="h2">Release Options</Header>
                <p>
                    Options for releases
                </p>
                <Divider />
                <Segment inverted>
                    <Button color="green" onClick={() => this.setState({choice: "add"})}>Add Release</Button>
                    <Button color="red" onClick={() => this.setState({choice: "del"})}>Delete Release</Button>
                </Segment>
                <Divider />
                <Segment inverted>
                    {this.makeChoice()}
                </Segment>
            </Segment>
        );
    }
}