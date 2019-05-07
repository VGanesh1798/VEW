import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Divider, Button } from "semantic-ui-react";
import axios from "axios";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            plist: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/login")
            .then((response) => {
                const intmed = response.data;
                const user = intmed.pop();
                this.setState({username: user, plist: intmed})
            })
    }

    render() {
        const outlist = this.state.plist.map((value) =>
        <ol key={value} style={{fontSize:"15px"}}>
            <Link style={{color:"white"}} to={{pathname:"/playlist", state: {user: this.state.username, title: value[0]} }}>{value[0]}</Link>
        </ol>)

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
                <Segment inverted color="teal">
                    <Header as="h4">My Playlists</Header>
                    <Divider />
                    {outlist}
                    <Button color="green" as={Link} to={{pathname:"/options/playlist", state: {user: this.state.username}}}>Playlist Options</Button>
                </Segment>
            </Segment>
        );
    }
}
