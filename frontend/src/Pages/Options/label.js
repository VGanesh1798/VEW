import React from "react";
import { Segment, Header, Divider, Form, Button } from "semantic-ui-react";
import axios from "axios";

export default class LabelOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            name: "",
            super: "",
            ceo: "",
            year: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/addlab", {
            name: this.state.name,
            super: this.state.super,
            ceo: this.state.ceo,
            year: this.state.year
        })
        .then((response) => {
            console.log(response.data);
            this.props.history.push('/home');
        })
    }

    removeSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/dellab", {
            name: this.state.name
        })
        .then((response) => {
            console.log(response.data);
            this.props.history.push('/home');
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    makeChoice = () => {
        if(this.state.choice === "add") {
            return (
                <Segment inverted>
                    <Header as="h3">Add Label</Header>
                    <Form inverted onSubmit={this.handleSubmit}>
                        <Form.Input required label="Name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                        <Form.Input label="Super Company" name="super" placeholder="Super" value={this.state.super} onChange={this.handleChange} />
                        <Form.Input label="CEO" name="ceo" placeholder="CEO" value={this.state.ceo} onChange={this.handleChange} />
                        <Form.Input label="Year Founded" name="year" placeholder="Year" type="number" value={this.state.year} onChange={this.handleChange} />
                        <Button type="submit" color="green">Add</Button>
                    </Form>
                </Segment>
            );
        }
        else if(this.state.choice === "del") {
            return (
                <Segment inverted>
                    <Header as="h3">Delete Label</Header>
                    <Form inverted onSubmit={this.removeSubmit}>
                        <Form.Input label="Name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                        <Button type="submit" color="red">Delete</Button>
                    </Form>
                </Segment>
            );
        }
    }

    render() {
        return (
            <Segment inverted>
                <Header as="h2">Label Options</Header>
                <p>
                    Below you will find options for labels.
                </p>
                <Divider />
                <Segment inverted>
                    <Button color="green" onClick={() => this.setState({choice: "add"})}>Add Label</Button>
                    <Button color="red" onClick={() => this.setState({choice: "del"})}>Delete Label</Button>
                </Segment>
                <Divider />
                <Segment inverted>
                    {this.makeChoice()}
                </Segment>
            </Segment>
        );
    }
}