import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Divider, Grid, Form, Button } from "semantic-ui-react";
import axios from "axios";

export default class SongSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            rel: "",
            song: "",
            genre: "",
            year: "",
            slist: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/song", {
            id: this.state.id,
            rel: this.state.rel,
            song: this.state.song,
            genre: this.state.genre,
            year: this.state.year    
        })
        .then((response) => {
            this.setState({slist: response.data});
            alert("Received " + Object.keys(this.state.slist).length + " results.");
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const outlist = this.state.slist.map((value) =>
        <ol key={value} style={{fontSize:"15px"}}>
            <Link style={{color:"white"}} to={{pathname:"/song", state:{id: value[0], art: value[1], rel: value[2], song: value[3]} }}>{value[3]}</Link>
        </ol>)

        return (
            <Segment inverted>
                <Grid inverted divided fluid="true" columns={2}>
                <Grid.Column>
                <Header inverted as="h2">Search Song</Header>
                <p>
                    Please enter information related 
                    to searching for songs.
                </p>
                <Divider />
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Input label="Artist Name" name="id" 
                                placeholder="Artist"  value={this.state.id}
                                onChange={this.handleChange} />
                    <Form.Input label="Release Name" name="rel"
                                placeholder="Release" value={this.state.rel}
                                onChange={this.handleChange} />
                    <Form.Input label="Song Name" name="song"
                                placeholder="Song" value={this.state.song}
                                onChange={this.handleChange} />
                    <Form.Input label="Genre" name="genre"
                                placeholder="Genre" value={this.state.genre}
                                onChange={this.handleChange} />
                    <Form.Input label="Release Year" name="year"
                                placeholder = "Year" type="number"
                                value = {this.state.year} 
                                onChange={this.handleChange} />
                    <Button type="submit" color="green">Search!</Button> 
                </Form>
                </Grid.Column>
                <Grid.Column>
                    <Header inverted as="h2">Results</Header>
                    <p>
                        After results show up, you can click on them
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