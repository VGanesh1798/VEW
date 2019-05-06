import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Divider, Grid, Container } from "semantic-ui-react";
import axios from "axios";

export default class Label extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Example",
            super: "",
            ceo: "",
            year: "",
            relist: []
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
                this.setState({relist: alist[1]});
                console.log(this.state.relist);
                this.setState({name: blist[0], super: blist[1], ceo: blist[2], year: blist[3]})
            })
        
    }

    render() {

        const songlist = this.state.relist.map((value) =>
        <ol key={value} style={{fontSize:"15px"}}>
            <Link style={{color: "white"}} to={{pathname: "/release", state: {id: value[1], name: value[2], release: value[0]} }}>{value[0]}</Link>
        </ol>);

        return (
            <Segment inverted>
                <Header as="h2">{this.state.name}</Header>
                <Divider />
                <Grid columns={2} inverted fluid="true">
                    <Grid.Column>
                        <Segment inverted color="blue">
                            <Header as="h5">Releases</Header>
                            <Divider />
                            <Container textAlign="left">
                                {songlist}
                            </Container>
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