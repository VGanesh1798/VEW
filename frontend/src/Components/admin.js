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
                    <Menu.Item as={Link} to="/options/users" name="User options" />
                    <Menu.Item as={Link} to="/options/artist" name="Artist options" />
                    <Menu.Item name="Release options" />
                    <Menu.Item name="Song options" />
                    <Menu.Item name="Label options" />
                </Menu>
            </Segment>
        );
    }
}