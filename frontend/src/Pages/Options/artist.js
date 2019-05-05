import React from "react";
import { Segment, Header, Divider, Button, Form } from "semantic-ui-react";
import axios from "axios";

export default class ArtistOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            name: "",
            year: "",
            town: "",
            style: "",
            instrument: "",
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/add/artist", {
                name: this.state.name,
                year: this.state.year,
                town: this.state.town,
                style: this.state.style,
                instrument: this.state.instrument
            })
            .then( (response) => {

            })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    makeChoice = () => {
        if(this.state.choice === "add") {
            return (
                <Segment inverted>
                    <Header as="h3">Add Artist</Header>
                    <Form inverted onSubmit={this.handleSubmit}>
                        <Form.Input label="Name" name="name" placeholder="Name" required value={this.state.name} onChange={this.handleChange} />
                        <Form.Input label="Year Born or Founded" name="year" placeholder="Year" type="number" value={this.state.year} onChange={this.handleChange} />
                        <Form.Input label="Hometown" name="town" placeholder="Hometown" value={this.state.town} onChange={this.handleChange} />
                        <Form.Input label="Style" name="style" placeholder="Style" value={this.state.style} onChange={this.handleChange} />
                        <Form.Input label="Instrument" name="instrument" placeholder="Instrument" value={this.state.instrument} onChange={this.handleChange}/>
                        <Button type="submit" color="green">Submit</Button>
                    </Form>
                </Segment>
            );
        }
        else if(this.state.choice === "change") {
            return (
                <Segment inverted>
                    <Header as="h3">Modify Artist</Header>
                </Segment>
            );
        }
        else if(this.state.choice === "remove") {
            return (
                <Segment inverted>
                    <Header as="h3">Delete Artist</Header>
                </Segment>
            );
        }
        else if(this.state.choice === "award") {
            return (
                <Segment inverted>
                    <Header as="h3">Artist Awards</Header>
                </Segment>
            );
        }
    }

    render() {
        return (
            <Segment inverted>
                <Header as="h2">Artist Options</Header>
                <p>
                    Below you will find options related to changing or removing artist information,
                    including the ability to create new artists.
                </p>
                <Divider />
                <Segment inverted>
                    <Button color="green" onClick={() => this.setState({choice: "add"})}>Add Artist</Button>
                    <Button color="teal" onClick={() =>this.setState({choice: "change"})}>Modify Artist</Button>
                    <Button color="red" onClick={() => this.setState({choice: "remove"})}>Delete Artist</Button>
                    <Button color="green" onClick={() => this.setState({choice: "award"})}>Add Award for Artist</Button>
                </Segment>
                <Divider />
                <Segment inverted>
                    {this.makeChoice()}
                </Segment>
            </Segment>
        );
    }
}