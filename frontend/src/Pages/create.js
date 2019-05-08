import React from "react";
import { Segment, Header, Divider, Form, Button } from "semantic-ui-react";
import axios from "axios";

export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        } 
    }
    
    handleClick = () => {
        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Creating new user for Flask...");
        axios.post("http://localhost:5000/create", {
                username: this.state.username,
                password: this.state.password
            })
            .then( (response) => {
                console.log(response.data);
                this.props.history.push('/');
            })
    }
    
    render() {
        return (
            <Segment inverted>
                <Header as="h3" textAlign="center">Create Account</Header>
                <Divider></Divider>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input required icon="user" label="Username" name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                        <Form.Input required icon="lock" label="Password" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    </Form.Group>
                    <Button color="green">Register</Button>
                </Form>
                <Divider></Divider>
                <Button color="teal" onClick={this.handleClick}>Return to Login</Button>
            </Segment>
        );
    }
}