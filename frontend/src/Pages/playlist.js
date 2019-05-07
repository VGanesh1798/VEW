import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Divider, Grid, Container } from "semantic-ui-react";
import axios from "axios";

export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            title: "",
            tag: "",
            slist: []
        }
    }

    componentDidMount() {
        if(this.props.location.state === null) {
            return;
        }
        axios.post("http://localhost:5000/playget", {
                user: this.props.location.state.user,
                title: this.props.location.state.title
            })
            .then((response) => {
                this.setState({tag: response.data[0][0], slist: response.data[1]});
            })
    }

    render() {
        const title = this.props.location.state.title;
        const user = this.props.location.state.user;

        const outlist = this.state.slist.map((value) =>
        <ol key={value} style={{fontSize:"15px"}}>
            <Link style={{color:"white"}} to={{pathname:"/song", state: {id: value[2], art: value[3], rel: value[1], song: value[0]} }}>{value[0]}</Link>
        </ol>)

        return (
            <Segment inverted>
                <Grid inverted fluid="true" columns={2}>
                    <Grid.Column>
                        <Header inverted as="h2">{title}</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header inverted as="h3">{user}</Header>
                    </Grid.Column>
                </Grid>
                <Divider />
                <Grid inverted fluid="true" columns={2}>
                    <Grid.Column textAlign="center">
                        <Segment inverted color="blue">
                            <Header as="h3">Songs</Header>
                            <Divider />
                            <Container textAlign="left">
                                {outlist}
                            </Container>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Segment inverted color="teal" textAlign="left">
                            <ul style={{listStyle:"none"}}>
                                <li>{this.state.tag}</li>
                            </ul>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}