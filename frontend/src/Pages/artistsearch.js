import React from "react";
import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";

export default class ArtistSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            year: 0,
            hometown: "",
            style: "",
            gender: "",
            instrument: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Okay.")
    }

    render() {
        return (
            <Segment inverted>
                <Header as="h3">Search Artist</Header>
                <Divider></Divider>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input label="Name" name="name" placeholder="Name" type="text"/>
                        <Form.Input label="Year" name="year" placeholder="Year" type="text"/>
                        <Form.Input label="Hometown" name="town" placeholder="Hometown" type="text"/>
                        <Form.Input label="Style" name="style" placeholder="Style" type="text"/>
                        <Form.Input label="Gender" name="gender" placeholder="Gender" type="text"/>
                        <Form.Input label="Instrument" name="gender" placeholder="Instrument" type="text"/>
                    </Form.Group>
                    <Button type="submit" color="green">Search!</Button>
                </Form>
            </Segment>
        );
    }
}