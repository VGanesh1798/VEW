import React from "react";
import { Segment, Header, Divider, Button, Form } from "semantic-ui-react";
import axios from "axios";

export default class UserOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            username: "",
            current: "",
            new: "",
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    removeSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/usergone", {
                name: this.state.username
            })
            .then( (response) => {
                console.log(response.data);
                this.props.history.push('/home');
            })
    }

    changeSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/userchange", {
                old: this.state.current,
                new: this.state.new
            })
            .then((response) => {
                console.log(response.data);
            })
    }

    makeChoice = () => {
        if(this.state.choice === "remove") {
            return (
                <Segment inverted>
                    <Header as="h3">Remove User</Header>
                    <Form inverted onSubmit={this.removeSubmit}>
                        <Form.Input label="Username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                        <Button type="submit" color="orange">Submit</Button>
                    </Form>
                </Segment>
            );
        }
        else if(this.state.choice ==="change") {
            return(
                <Segment inverted>
                    <Header as="h3">Change User's Username</Header>
                    <Form inverted onSubmit={this.changeSubmit}>
                        <Form.Input label="Current Username" name="current" placeholder="Current" value={this.state.current} onChange={this.handleChange} />
                        <Form.Input label="New Username" name="new" placeholder="New" value={this.state.new} onChange={this.handleChange} />
                        <Button type="submit" color="orange">Submit</Button>
                    </Form>
                </Segment>
            );
        }
    }

    render() {

        return (
            <Segment inverted>
                <Header as="h2">User Options</Header>
                <p>
                    Below you will find administrative options for users.
                    You can change a user's username or delete them altogether.
                </p>
                <Divider />
                <Segment inverted>
                    <Button color="teal" onClick={() => this.setState({choice: "change"})}>Change User's username</Button>
                    <Button color="red" onClick={() => this.setState({choice: "remove"})}>Remove User</Button>
                </Segment>
                <Divider />
                <Segment inverted>
                    {this.makeChoice()}
                </Segment>
            </Segment>
        );
    }    
}