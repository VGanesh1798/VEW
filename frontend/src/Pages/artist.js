import React from "react";
import { Segment, Header, Divider, Grid } from "semantic-ui-react";

export default class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            fname: "",
            lname: "",
            year: "",

        }
    }

    render() {

        const {artist} = this.props.location.state

        return (
          <Segment inverted>
            <Header as="h3">{artist}</Header>
            <Divider></Divider>
            <Grid inverted fluid="true">
                <Grid.Column>
                    <Segment>
                        <Header as="h5">Releases</Header>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        Rating
                    </Segment>
                </Grid.Column>
            </Grid>
          </Segment>  
        );
    }
}