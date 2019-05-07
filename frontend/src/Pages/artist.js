import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Divider, Grid, Container } from "semantic-ui-react";
import axios from "axios";

export default class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "Example",
            name: "Example",
            year: "",
            town: "",
            style: "",
            instrument: "",
            disbanded: "",
            rating: "",
            relist: [],
            awlist: []
        }
    }

    componentDidMount() {
        if(this.props.location.state === null) {
            return;
        }
        const {id} = this.props.location.state;
        axios.post("http://localhost:5000/artistlook", {id})
            .then( (response) => {
                const alist = response.data;
                const blist = alist[0]
                this.setState({relist: alist[1], awlist: alist[2]});
                this.setState({id: blist[0], name: blist[1], year: blist[2], 
                               town: blist[3], style: blist[4], 
                               instrument: blist[5], 
                               disbanded: blist[6]});
                });
        axios.post("http://localhost:5000/artrate", {id})
                .then( (response) => {
                    this.setState({rating: response.data[0][0]});
                })
    }

    render() {

        const songlist = this.state.relist.map((value) =>
        <ol key={value} style={{fontSize:"15px"}}>
            <Link style={{color:"white"}} to={{pathname: "/release", state: {id: this.state.id, name: this.state.name, release: value[1]} }}>{value[1]}</Link>
        </ol>);

        const awardlist = this.state.awlist.map((value) =>
        <ol key={value} style={{fontSize:"15px"}}>
            {value[0]}<p>    </p>{value[1]}
        </ol>);

        return (
          <Segment inverted>
            <Grid inverted columns={2} fluid="true">
                <Grid.Column>
                    <Header inverted as="h2">{this.state.name}</Header>
                </Grid.Column>
                <Grid.Column floated='right' textAlign="center">
                    <Header inverted as="h3">ID: {this.state.id}</Header>
                </Grid.Column>
            </Grid>
            <Divider />
            <Grid columns={2} inverted fluid="true">
                <Grid.Column textAlign="center">
                    <Segment inverted color="blue">
                        <Header as="h3">Releases</Header>
                        <Divider />
                        <Container textAlign="left">
                            {songlist}
                        </Container>
                    </Segment>
                    <Segment inverted color="blue">
                        <Header as="h3">Major Awards</Header>
                        <Container textAlign="left">
                            {awardlist}
                        </Container>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment inverted textAlign="center">
                        <Segment inverted color="pink">
                            <Header as="h4">RATING: {this.state.rating}</Header>
                        </Segment>
                        <Segment inverted color="teal" textAlign="left">
                            <ul style={{listStyle:"none"}}>
                                <li>{this.state.instrument}</li>
                                <li>{this.state.town}</li>
                                <li>{this.state.style}</li>
                                <li>{this.state.year}</li>
                                <li>{this.state.disbanded}</li>
                            </ul>
                        </Segment>
                    </Segment>
                </Grid.Column>
            </Grid>
          </Segment>  
        );
    }
}