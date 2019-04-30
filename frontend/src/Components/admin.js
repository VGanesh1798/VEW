import React from "react";
import { Menu, Segment, Header, Divider } from "semantic-ui-react";

export default class Admin extends React.Component {
    render() {
        return (
            <Segment compact inverted color="violet" textAlign="center">
                <Header inverted as="h4">Administrator Dashboard</Header>
                <Divider></Divider>
                <Menu inverted color="blue" vertical>
                    <Menu.Item>Hello</Menu.Item>
                </Menu>
            </Segment>
        );
    }
}