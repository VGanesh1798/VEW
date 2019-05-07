import React from "react";
import { Form, Header, Segment, Button, Divider } from "semantic-ui-react";
import axios from "axios";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }
    
    componentDidMount() {
        axios.post("http://localhost:5000/logout", {
                username: this.state.username
            })
            .then((response) => {
                console.log(response.data);
            })
        axios.get("http://localhost:5000/")
            .then(function (response) {
                console.log(response.data);
            })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log("Fetching " + this.state.username + " from Flask" )
        axios.post("http://localhost:5000/login", {
                username: this.state.username,
                password: this.state.password
            })
            .then( (response) => {
                if(response.data) {
                    this.props.history.push('/home');
                }
            })
            .catch( (error) => {
                console.log("No user exists!");
            })
    }

    handleClick = (e) => {
        if(e.target.name === 'create') {
            this.props.history.push('/create');
        }
    }
    
    render() {
        return (
            <Segment inverted>
                <Header as="h3" textAlign="center">Login</Header>
                <Divider/>
                    <Form inverted onSubmit={this.handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input required icon="user" label="Username" name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                            <Form.Input required icon="lock" label="Password" name="password" type ="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                        </Form.Group>
                        <Button type="submit" color="green">Login</Button>
                    </Form>
                <Divider/>
                <Button color="teal" name="create" onClick={this.handleClick}>Create Account</Button>
            </Segment>
        );
    }
}