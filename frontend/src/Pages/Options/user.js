import React from "react";
import { Segment, Header, Divider, Button, Form } from "semantic-ui-react";
import axios from "axios";

export default class UserOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            username: ""
        }
    }

    handleChange = (e) => {
        this.setState({username: e.target.value});
    }

    removeSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/usergone", {
                name: this.state.username
            })
            .then( (response) => {
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
            return <h1>Bye</h1>
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