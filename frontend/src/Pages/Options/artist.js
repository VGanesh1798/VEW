import React from "react";
import { Segment, Header, Divider, Button, Form } from "semantic-ui-react";

export default class ArtistOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
        }
    }

    makeChoice = () => {
        if(this.state.choice === "add") {
            return (
                <Segment inverted>
                    <Header as="h3">Add Artist</Header>
                    <Form inverted>
                        <Form.Input label="Name" />
                    </Form>
                </Segment>
            );
        }
        else if(this.state.choice === "change") {
            return (
                <Segment inverted>
                    <Header as="h3">Modify Artist</Header>
                </Segment>
            );
        }
        else if(this.state.choice === "remove") {
            return (
                <Segment inverted>
                    <Header as="h3">Delete Artist</Header>
                </Segment>
            );
        }
    }

    render() {
        return (
            <Segment inverted>
                <Header as="h2">Artist Options</Header>
                <p>
                    Below you will find options related to changing or removing artist information,
                    including the ability to create new artists.
                </p>
                <Divider />
                <Segment inverted>
                    <Button color="green" onClick={() => this.setState({choice: "add"})}>Add Artist</Button>
                    <Button color="teal" onClick={() =>this.setState({choice: "change"})}>Modify Artist</Button>
                    <Button color="red" onClick={() => this.setState({choice: "remove"})}>Delete Artist</Button>
                </Segment>
                <Divider />
                <Segment inverted>
                    {this.makeChoice()}
                </Segment>
            </Segment>
        );
    }
}