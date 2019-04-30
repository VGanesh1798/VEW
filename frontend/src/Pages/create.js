import React from "react";
import { Segment, Header, Divider, Form, Button } from "semantic-ui-react";

export default class Create extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.history.push('/');
    }
    
    render() {
        return (
            <Segment inverted>
                <Header as="h3" textAlign="center">Create Account</Header>
                <Divider></Divider>
                <Form inverted>
                    <Form.Group widths="equal">
                        <Form.Input required icon="user" label="Username" name="username" type="text" placeholder="Username"></Form.Input>
                        <Form.Input required icon="lock" label="Password" name="password" type="password" placeholder="Password"></Form.Input>
                    </Form.Group>
                    <Button color="green">Register</Button>
                </Form>
                <Divider></Divider>
                <Button color="teal" onClick={this.handleClick}>Return to Login</Button>
            </Segment>
        );
    }
}