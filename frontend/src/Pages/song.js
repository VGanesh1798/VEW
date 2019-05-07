import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Divider, Grid, Container, Button } from "semantic-ui-react";
import axios from "axios";

export default class Song extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            rel: "",
            song: "",
            genre: "",
            len: "",
            year: "",
            flist: []
        }
    }

    componentDidMount() {
        if(this.props.location.state === null) {
            return;
        }
        axios.post("http://localhost:5000/songlook", {
                id: this.props.location.state.id,
                rel: this.props.location.state.rel,
                song: this.props.location.state.song
            })
            .then((response) => {
                const slist = response.data[0];
                this.setState({
                    id: slist[0],
                    rel: slist[1],
                    song: slist[2],
                    genre: slist[3],
                    len: slist[4],
                    year: slist[6]
                })
            })
        axios.post("http://localhost:5000/feats", {
                id: this.props.location.state.id,
                rel: this.props.location.state.rel,
                song: this.props.location.state.song
            })
            .then((response) => {
                this.setState({flist: response.data})
                console.log(this.state.flist, "HI");
            })
    }

    render() {
        const song = this.props.location.state.song;
        const rel = this.props.location.state.rel;
        const art = this.props.location.state.art;
    
        const feal = this.state.flist.map((value) =>
        <ol key={value} style={{fontSize:"15px"}}>
            <Link style={{color:"white"}} to={{pathname: "/artist", state: {id: value[0]} }}>{value[1]}</Link>
        </ol>)

        return (
            <Segment inverted>
                <Grid inverted fluid="true" columns={3}>
                    <Grid.Column>
                        <Header inverted as="h2">{song}</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header inverted as="h3">{rel}</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header inverted as="h4">{art}</Header>
                    </Grid.Column>
                </Grid>
                <Divider />
                <Grid inverted columns={2} fluid="true">
                    <Grid.Column textAlign="center">
                        <Segment inverted color="blue">
                            <Header as="h3">Features</Header>
                            <Divider />
                            <Container textAlign="left">
                                {feal}
                            </Container>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Button color="green">Add to Playlist!</Button>
                        <Segment inverted color="teal" textAlign="left">
                            <ul style={{listStyle:"none"}}>
                                <li>{this.state.genre}</li>
                                <li>{this.state.len}</li>
                                <li>{this.state.year}</li>
                            </ul>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}