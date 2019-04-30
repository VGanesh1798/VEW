import React from "react";
import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";

export default class ArtistSearch extends React.Component {
    render() {
        return (
            <Segment inverted>
                <Header as="h3">Search Artist</Header>
                <Divider></Divider>
                <Form inverted>
                    <Form.Group widths="equal">
                        <Form.Input label="Name" placeholder="Name"></Form.Input>
                        <Form.Input label="Year" placeholder="Year"></Form.Input>
                        <Form.Input label="Hometown" placeholder="Hometown"></Form.Input>
                        <Form.Input label="Style" placeholder="Style"></Form.Input>
                        <Form.Input label="Gender" placeholder="Gender"></Form.Input>
                        <Form.Input label="Instrument" placeholder="Instrument"></Form.Input>
                    </Form.Group>
                    <Button type="submit" color="green">Search!</Button>
                </Form>
            </Segment>
        );
    }
}