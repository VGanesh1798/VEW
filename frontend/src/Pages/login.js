import React from "react";
import { Form, Header, Segment, Button, Divider, Grid, Label } from "semantic-ui-react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        alert(this.state.username);
    }

    handleClick(event) {
        event.preventDefault();
        alert(this.state.password);
    }
    
    render() {
        return (
            <Segment inverted>
                <Header as="h3" textAlign="center">Login</Header>
                <Divider></Divider>
                    <Form inverted onSubmit={this.handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input required icon="user" label="Username" name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange}></Form.Input>
                            <Form.Input required icon="lock" label="Password" name="password" type ="password" placeholder="Password"></Form.Input>
                        </Form.Group>
                        <Button type="submit" color="green">Login</Button>
                    </Form>
                <Divider></Divider>
                <Button color="teal" onClick={this.handleClick}>Create Account</Button>
            </Segment>
        );
    }
}