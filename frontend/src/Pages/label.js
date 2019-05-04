import React from "react";
import { Segment, Header, Divider, Grid } from "semantic-ui-react";
import axios from "axios";

export default class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Example",
            super: "",
            ceo: "",
            year: ""
        }
    }

    componentDidMount() {
        if(this.props.location.state === null) {
            return;
        }
        const {id} = this.props.location.state;
        axios.post("http://localhost:5000/labget", {id})
            .then( (response) => {
                const alist = response.data;
                const blist = alist[0]
                console.log(blist);
                this.setState({name: blist[0], super: blist[1], ceo: blist[2], year: blist[3]})
            })
        
    }

    render() {

        return (
            <Segment inverted>
                <Header as="h2">{this.state.name}</Header>
                <Divider />
                <Grid columns={2} inverted fluid="true">
                    <Grid.Column>
                        <Segment inverted color="blue">
                            <Header as="h5">Releases</Header>
                            <Divider />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment inverted color="teal">
                            <ul style={{listStyle:"none"}}>
                                <li>{this.state.super}</li>
                                <li>{this.state.ceo}</li>
                                <li>{this.state.year}</li>
                            </ul>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}