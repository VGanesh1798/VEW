import React from "react";
import { Segment, Menu } from "semantic-ui-react";

export default class Search extends React.Component {
    render() {
        return (
            <Segment inverted color="violet" textAlign="center">
                <Menu inverted color="blue" vertical pointing>
                    <Menu.Item name="Search Artist" /> 
                    <Menu.Item name="Search Releases" />
                    <Menu.Item name="Search Songs" />
                    <Menu.Item name="Search Labels" />
                    <Menu.Item name="Search Playlists" />
                </Menu>
                <Menu inverted color="yellow" vertical pointing>
                    <Menu.Item name="USER" />
                </Menu>
            </Segment>
        );
    }
}