import React from "react";
import { Segment, Header, Divider, Grid } from "semantic-ui-react";
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
            rating: ""
        }
    }

    componentDidMount() {
        if(this.props.location.state == null) {
            return;
        }
        const {id} = this.props.location.state;
        axios.post("http://localhost:5000/artistlook", {id})
            .then( (response) => {
                const alist = response.data;
                const blist = alist[0]
                console.log(blist);
                this.setState({id: blist[0], name: blist[1], year: blist[2], 
                               town: blist[3], style: blist[4], instrument: blist[5] });
            })
    }

    render() {

        return (
          <Segment inverted>
            <Grid inverted columns={2} fluid="true">
                <Grid.Column inverted>
                    <Header inverted as="h2">{this.state.name}</Header>
                </Grid.Column>
                <Grid.Column floated='right' textAlign="center">
                    <Header inverted as="h3">ID: {this.state.id}</Header>
                </Grid.Column>
            </Grid>
            <Divider></Divider>
            <Grid columns={2} inverted fluid="true">
                <Grid.Column textAlign="center">
                    <Segment inverted color="blue">
                        <Header as="h5">Releases</Header>
                        <Divider />
                    </Segment>
                    <Segment inverted color="blue">
                        <Header as="h6">Major Awards</Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment inverted textAlign="center">
                        <div style={{borderRadius:"50%", width: "100px", height:"100px", background:"#32CD32", border: "3px solid"}}>
                            <Header as="h6">RATING: {this.state.rating}</Header>
                        </div>
                        <Segment inverted color="teal">
                            <ul style={{listStyle:"none"}}>
                                <li>{this.state.instrument}</li>
                                <li>{this.state.town}</li>
                                <li>{this.state.style}</li>
                                <li>{this.state.year}</li>
                            </ul>
                        </Segment>
                    </Segment>
                </Grid.Column>
            </Grid>
          </Segment>  
        );
    }
}