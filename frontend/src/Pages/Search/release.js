import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Divider, Form, Button, Grid } from "semantic-ui-react";
import axios from "axios";

export default class ReleaseSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            genre: "",
            type: "",
            year: "",
            relist: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/relsearch", {
                id: this.state.id,
                name: this.state.name,
                genre: this.state.genre,
                type: this.state.type,
                year: this.state.year
            })
            .then( (response) => {
                this.setState({relist: response.data});
                alert("Received " + Object.keys(this.state.relist).length + " results.");
                
            })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const outlist = this.state.relist.map((value) =>
        <ol key={value} style={{fontSize:"15px"}}>
            <Link style={{color:"white"}} to={{pathname: "/release", state: {id: value[0], name: value[1], release: value[2]} }}>{value[2]}</Link>
        </ol>)

        return (
            <Segment inverted>
                <Grid inverted divided fluid="true" columns={2}>
                <Grid.Column>
                <Header inverted as="h3">Search Release</Header>
                <p>
                    Please enter information related to musical 
                    releases in order to receive a list of matching 
                    items.
                </p>
                <Divider />
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Input label="Artist Name" name="id" placeholder="Artist" type="text" value={this.state.id} onChange={this.handleChange} />
                    <Form.Input label="Release Name" name="name" placeholder="Name" type="text" value={this.state.name} onChange={this.handleChange} />
                    <Form.Input label="Genre" name="genre" placeholder="Genre" type="text" value={this.state.genre} onChange={this.handleChange}/>
                    <Form.Input label="Release Type" name="type" placeholder="Type" type="text" value={this.state.type} onChange={this.handleChange} />
                    <Form.Input label="Release Year" name="year" placeholder="Year" type="number" value={this.state.year} onChange={this.handleChange} />
                    <Button type="submit" color="green">Search!</Button>
                </Form>
                </Grid.Column>
                <Grid.Column>
                    <Header inverted as="h2">Results</Header>
                    <p>
                        After
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