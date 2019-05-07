import React from "react";
import { Segment, Header, Divider, Button, Form } from "semantic-ui-react";
import axios from "axios";

export default class PlaylistOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.state.user,
            choice: "",
            title: "",
            tag: ""
        }
    }

    handleCreate = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/addplay", {
                user: this.props.location.state.user,
                title: this.state.title,
                tag: this.state.tag
            })
            .then((response) => {
                console.log(response.data);
                this.props.history.push('/home');
            })
    }

    handleDelete = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/delplay", {
                title: this.state.title
            })
            .then((response) => {
                console.log(response.data);
                this.props.history.push('/home');
            })
    }

    makeChoice = () => {
        if(this.state.choice === "add") {
            return (
                <Segment inverted>
                    <Header as="h3">Create Playlist</Header>
                    <Form inverted onSubmit={this.handleCreate}>
                        <Form.Input required 
                                    label="Playlist Title" 
                                    name="title" placeholder="Title"
                                    value={this.state.title}
                                    onChange={this.handleChange}/>
                        <Form.Input label="Tag" name="tag"
                                    placeholder="Tag"
                                    value={this.state.tag}
                                    onChange={this.handleChange}/>
                        <Button type="submit" color="green">Create</Button>
                    </Form>
                </Segment>
            );
        }
        else if(this.state.choice === "del") {
            return (
                <Segment inverted>
                    <Header as="h3">Delete Playlist</Header>
                    <Form inverted onSubmit={this.handleDelete}>
                        <Form.Input label="Playlist Title"
                                    name="title" placeholder="Title"
                                    value={this.state.title}
                                    onChange={this.handleChange}/>
                        <Button type="submit" color="red">Delete</Button>
                    </Form>
                </Segment>
            );
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <Segment inverted>
                <Header as="h2">Playlist Options for User {this.state.user}</Header>
                <p>
                    Below you will find options for making or deleting your playlists.
                </p>
                <Divider />
                <Segment inverted>
                    <Button color="green" onClick={() => this.setState({choice: "add"})}>Create Playlist</Button>
                    <Button color="red" onClick={() => this.setState({choice: "del"})}>Delete Playlist</Button>               
                </Segment>
                <Divider />
                <Segment inverted>
                    {this.makeChoice()}
                </Segment>
            </Segment>
        );
    }
}