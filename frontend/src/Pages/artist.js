import React from "react";
import { Segment, Header, Divider, Grid } from "semantic-ui-react";

export default class Artist extends React.Component {
    render() {
        return (
          <Segment inverted>
            <Header as="h3">ARTIST</Header>
            <Divider></Divider>
            <Grid>
                <Grid.Column width={7}>
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