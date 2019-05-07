import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Grid, Divider, Form, Button } from "semantic-ui-react";
import axios from "axios";

export default class PlaylistSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            title: "",
            tag: "",
            plist: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/playlist", {
                user: this.state.user,
                title: this.state.title,
                tag: this.state.tag
            })
            .then((response) => {
                this.setState({plist: response.data})
                alert("Received " + Object.keys(this.state.plist).length + " results.");
            })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const outlist = this.state.plist.map((value) => 
        <ol key={value} style={{fontSize:"15px"}}>
            <Link style={{color:"white"}} to={{pathname:"/playlist", state:{user: value[0], title: value[1]} }}>{value[1]}</Link>
        </ol>)

        return (
            <Segment inverted>
                <Grid inverted divided fluid="true" columns={2}>
                <Grid.Column>
                <Header inverted as="h2">Search Playlist</Header>
                <p>
                    Please enter a username, playlist title, or tag
                    to get a list of user-created playlists.
                </p>
                <Divider />
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Input label="Username" name="user"
                                placeholder="User" value={this.state.user}
                                onChange={this.handleChange} />
                    <Form.Input label="Playlist Title" name="title"
                                placeholder="Title" value={this.state.title}
                                onChange={this.handleChange} />
                    <Form.Input label="Playlist Tag" name="tag"
                                placeholder="Tag" value={this.state.tag}
                                onChange={this.handleChange} />
                    <Button type="submit" color="green">Search!</Button>
                </Form>
                </Grid.Column>
                <Grid.Column>
                    <Header inverted as="h2">Results</Header>
                    <p>
                        You can click on the playlist to look at the list of songs.
                    </p>
                    <Divider />
                    <Segment inverted textAlign="center">
                        {outlist}
                    </Segment>
                </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}