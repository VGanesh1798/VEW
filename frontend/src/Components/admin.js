import React from "react";
import { Link } from "react-router-dom";
import { Menu, Segment, Header, Divider } from "semantic-ui-react";

export default class Admin extends React.Component {
    render() {
        return (
            <Segment compact inverted color="violet" textAlign="center" floated="right">
                <Header inverted as="h4">Administrator Dashboard</Header>
                <Divider></Divider>
                <Menu inverted color="blue" vertical>
                    <Menu.Item as={Link} to="/options/user" name="User options" />
                    <Menu.Item as={Link} to="/options/artist" name="Artist options" />
                    <Menu.Item as={Link} to="/options/release" name="Release options" />
                    <Menu.Item as={Link} to="/options/song" name="Song options" />
                    <Menu.Item as={Link} to="/options/label" name="Label options" />
                </Menu>
            </Segment>
        );
    }
}