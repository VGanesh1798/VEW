import React from "react";
import { Segment, Header, Divider, Grid, Container, Button } from "semantic-ui-react";
import axios from "axios";

export default class Release extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            genre: "",
            type: "",
            rating: "",
            year: "",
            songlist: []
        }
    }

    componentDidMount() {
        if(this.props.location.state === null) {
            return;
        }
        axios.post("http://localhost:5000/rellook", 
            {
                id: this.props.location.state.id,
                name: this.props.location.state.name,
                release: this.props.location.state.release
            })
            .then( (response) => {
                const alist = response.data;
                const blist = alist[0]
                console.log(blist);
                this.setState({songlist: alist[1]});
                this.setState({
                    id: blist[0],
                    name: blist[1],
                    genre: blist[2],
                    type: blist[3],
                    year: blist[5]

                });
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const release = this.props.location.state.release;
        const name = this.props.location.state.name;
        const slist = this.state.songlist.map((value) =>
        <ol key={value} style={{fontSize:"15px"}}>
            {value[2]}
        </ol>)

        return (
            <Segment inverted>
                <Grid inverted columns={2} fluid="true">
                    <Grid.Column>
                        <Header inverted as="h2">{release}</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header inverted as="h3">{name}</Header>
                    </Grid.Column>
                </Grid>
                <Divider />
                <Grid columns={2} inverted fluid="true">
                    <Grid.Column textAlign="center">
                        <Segment inverted color="blue">
                            <Header as="h3">Songs</Header>
                            <Divider />
                            <Container textAlign="left">
                                {slist}
                            </Container>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Segment inverted color="pink" textAlign="center">
                            <Header as="h6">RATING: {this.state.rating}</Header>
                        </Segment>
                        <Segment inverted textAlign="center">
                            <Button color="green">Rate this Release!</Button>
                        </Segment>
                        <Segment inverted color="teal" textAlign="left">
                            <ul style={{listStyle:"none"}}>
                                <li>{this.state.genre}</li>
                                <li>{this.state.type}</li>
                                <li>{this.state.year}</li>
                            </ul>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}