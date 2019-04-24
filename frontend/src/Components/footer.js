import React from "react";
import { Segment, Header, Grid, Icon } from "semantic-ui-react";

export default class Footer extends React.Component {
    render() {
        return (
            <Segment inverted color="violet">
                <Grid columns={2}>
                    <Grid.Column floated="left">
                        <Icon name="github" size="large"></Icon>
                        <a style={{color:"white"}} href="https://github.com/VGanesh1798/VEW">Source Code</a>
                    </Grid.Column>
                    <Grid.Column>
                        <Header inverted as="h2" textAlign="center">Welp.</Header>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}