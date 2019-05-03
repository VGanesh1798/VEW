import React from "react";
import { Link } from "react-router-dom";
import { Segment, Form, Header, Divider, Button, Grid } from "semantic-ui-react";
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
            artlist: {}
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
                this.setState({artlist: response.data});
                console.log(this.state.artlist);
                alert("Received " + Object.keys(this.state.artlist).length + " results.")
            })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const idlist = Object.keys(this.state.artlist);
        const namelist = Object.values(this.state.artlist);
        const outlist = namelist.map((value) =>
        <ol key={value} style={{fontSize:"20px"}}> 
            <Link style={{color:"white"}} to={{pathname: "/artist", state: {artist: value} }}>{value}</Link>
        </ol>);

        return (
            <Segment inverted>
                <Grid inverted divided fluid="true" columns={2}>
                <Grid.Column>
                <Header inverted as="h2">Search Artist</Header>
                <p>
                    Please enter values for querying for an artist.
                    You may choose to enter values in all fields, or
                    you may choose to enter nothing. Of course if you choose
                    to enter nothing, you won't get any results ;)
                </p>
                <Divider/>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Input label="Name (Enter part of name to receive partial matches)" name="name" placeholder="Name" type="text" value={this.state.name} onChange={this.handleChange}/>
                    <Form.Input label="Year Born or Founded" name="year" placeholder="Year" type="number" value={this.state.year} onChange={this.handleChange}/>
                    <Form.Input label="Hometown" name="town" placeholder="Hometown" type="text" value={this.state.hometown} onChange={this.handleChange}/>
                    <Form.Input label="Style" name="style" placeholder="Style" type="text" value={this.state.style} onChange={this.handleChange}/>
                    <Form.Input label="Instrument" name="instrument" placeholder="Instrument" type="text" value={this.state.instrument} onChange={this.handleChange}/>
                    <Button type="submit" color="green">Search!</Button>
                </Form>
                </Grid.Column>
                <Grid.Column>
                <Header inverted as="h2">Results</Header>
                <p>
                    After results are displayed, you can click on an
                    artist's name to be taken to their profile page.
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