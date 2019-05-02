import React from "react";
import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";
import axios from "axios";

export default class ArtistSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            year: 0,
            hometown: "",
            style: "",
            gender: "",
            instrument: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Searching...")

        axios.post("http://localhost:5000/artist", {
                name: this.state.name,
                year: this.state.year,
                hometown: this.state.hometown,
                style: this.state.style,
                gender: this.state.gender,
                instrument: this.state.instrument
            })
            .then( (response) => {
                console.log(response.data);
                alert(response.data);
            })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <Segment inverted>
                <Header as="h3">Search Artist</Header>
                <Divider/>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Input label="Name" name="name" placeholder="Name" type="text" value={this.state.name} onChange={this.handleChange}/>
                    <Form.Input label="Year" name="year" placeholder="Year" type="text" value={this.state.year} onChange={this.handleChange}/>
                    <Form.Input label="Hometown" name="town" placeholder="Hometown" type="text" value={this.state.hometown} onChange={this.handleChange}/>
                    <Form.Input label="Style" name="style" placeholder="Style" type="text" value={this.state.style} onChange={this.handleChange}/>
                    <Form.Input label="Gender" name="gender" placeholder="Gender" type="text" value={this.state.gender} onChange={this.handleChange}/>
                    <Form.Input label="Instrument" name="instrument" placeholder="Instrument" type="text" value={this.state.instrument} onChange={this.handleChange}/>
                    <Button type="submit" color="green">Search!</Button>
                </Form>
            </Segment>
        );
    }
}