import React from "react";
import { Link } from "react-router-dom";
import { Segment, Menu, Header, Divider } from "semantic-ui-react";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.history.push('/');
    }

    render() {
        return (
            <Segment compact inverted color="violet" textAlign="center">
                <Header inverted as="h4">Search Tools</Header>
                <Divider></Divider>
                <Menu inverted color="blue" vertical>
                    <Menu.Item as={Link} to="/search/artist" name="Search Artists"/>
                    <Menu.Item as={Link} to="/search/release" name="Search Releases"/>
                    <Menu.Item as={Link} to="/search/song" name="Search Songs"/>
                    <Menu.Item as={Link} to="/search/label" name="Search Labels"/>
                    <Menu.Item as={Link} to="/search/playlist" name="Search Playlists"/>
                </Menu>
                <Menu inverted color="yellow" vertical>
                    <Menu.Item as={Link} to="/home" name="Home" />
                    <Menu.Item as={Link} to="/" name="Logout or Return to Login"/>
                </Menu>
            </Segment>
        );
    }
}