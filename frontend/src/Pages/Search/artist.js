import React from "react";
import { Link } from "react-router-dom";
import { Segment, Form, Header, Divider, Button, Container, List, Grid } from "semantic-ui-react";
import axios from "axios";

export default class ArtistSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            year: "",
            town: "",
            style: "",
            instrument: "",
            artlist: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log("Searching...")

        axios.post("http://localhost:5000/artist", {
                name: this.state.name,
                year: this.state.year,
                town: this.state.town,
                style: this.state.style,
                instrument: this.state.instrument
            })
            .then( (response) => {
                console.log(response.data);
                this.setState({artlist: response.data});
                alert("Received " + this.state.artlist.length + " results.")
            })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const outlist = this.state.artlist.map((value) =>
        <List as={Link} to={{ pathname: "/artist", state: {artist: value} }}>{value}</List>);

        return (
            <Segment inverted>
                <Grid inverted divided fluid="true" columns={2}>
                <Grid.Column>
                <Header inverted as="h3">Search Artist</Header>
                <p>
                    Please enter values for querying for an artist.
                    You may choose to enter values in all fields, or
                    you may choose to enter nothing. Of course if you choose
                    to enter nothing, you won't get any results ;)
                </p>
                <Divider/>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Input label="Name" name="name" placeholder="Name" type="text" value={this.state.name} onChange={this.handleChange}/>
                    <Form.Input label="Year Born or Founded" name="year" placeholder="Year" type="number" value={this.state.year} onChange={this.handleChange}/>
                    <Form.Input label="Hometown" name="town" placeholder="Hometown" type="text" value={this.state.hometown} onChange={this.handleChange}/>
                    <Form.Input label="Style" name="style" placeholder="Style" type="text" value={this.state.style} onChange={this.handleChange}/>
                    <Form.Input label="Instrument" name="instrument" placeholder="Instrument" type="text" value={this.state.instrument} onChange={this.handleChange}/>
                    <Button type="submit" color="green">Search!</Button>
                </Form>
                </Grid.Column>
                <Grid.Column>
                <Header inverted as="h3">Results</Header>
                <Container textAlign="center">
                    {outlist}
                </Container>
                </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}