import React from "react";
import { Form, Header, Segment, Button, Divider } from "semantic-ui-react";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.bypassLogin = this.bypassLogin.bind(this);
    }
    
    componentDidMount() {
        console.log("Fetching from Flask")
        fetch('http://localhost:5000/')
        .then(r => r.json())
        .then(r => {
            console.log(r)
        },
            error => {console.log("Oops!")

            }
        )

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log("Fetching " + this.state.username + " from Flask" )
        fetch('http://localhost:5000/login', {method: 'POST',})
        .then(r => r.json())
        .then(r => {
            console.log(r)
        })
    }

    handleClick() {
        this.props.history.push('/create');
    }

    bypassLogin() {
        this.props.history.push('/home');
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
                <Button color="teal" floated="right" onClick={this.bypassLogin}>Continue as Guest</Button>
            </Segment>
        );
    }
}