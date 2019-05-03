import React from "react";
import { Segment, Header, Divider, Button } from "semantic-ui-react";

export default class UserOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: ""
        }
    }

    handleClick = () => {
        this.setState({choice: "remove"});
    }

    makeChoice = () => {
        if(this.state.choice === "remove") {
            return <h1>Hello</h1>
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
                    <Button color="teal" onClick={this.handleClick}>Change User's username</Button>
                    <Button color="red">Remove User</Button>
                </Segment>
                <Divider />
                <Segment inverted>
                    {this.makeChoice()}
                </Segment>
            </Segment>
        );
    }    
}