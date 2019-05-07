import React from 'react';
import { Header, Segment, Divider } from "semantic-ui-react";
import axios from "axios";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/login")
            .then((response) => {
                console.log(response.data);
                this.setState({username: response.data})
            })
    }

    render() {
        return (
            <Segment inverted>
                <Header as="h3">Welcome, {this.state.username}!</Header>
                <Divider></Divider>
                <p>
                    Welcome to Smartify, the smart music database!
                    Please use the menu at the left to search for
                    artists, releases, songs, labels, or playlists 
                    using a variety of filters such as genre, hometown,
                    or even length!
                </p>
            </Segment>
        );
    }
}
