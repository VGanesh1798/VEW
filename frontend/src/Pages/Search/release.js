import React from "react";
import { Segment, Header, Divider, Form, Button, Container } from "semantic-ui-react";
import axios from "axios";

export default class ReleaseSearch extends React.Component {
    render() {
        return (
            <Segment inverted>
                <Header as="h3">Search Release</Header>
                <p>
                    Please enter information related to musical 
                    releases in order to receive a list of matching 
                    items.
                </p>
                <Divider />
                <Form inverted>
                    <Form.Input label="Name" name="name" placeholder="Name" type="text" />
                    <Form.Input label="Release Year" name="year" placeholder="Year" type="number" />
                    <Form.Input label="Release Type" name="type" placeholder="Type" type="text" />
                    <Form.Input label="Genre" name="genre" placeholder="Genre" type="text" />
                    <Button type="submit" color="green">Search!</Button>
                </Form>
            </Segment>
        );
    }
}