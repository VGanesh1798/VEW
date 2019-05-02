import React from "react";
import { Container, Segment, Grid, Divider } from "semantic-ui-react";
import Title from "../Components/title";
import Search from "../Components/search";
import Footer from "../Components/footer";
import Admin from "../Components/admin";

export default class Root extends React.Component {

    state = { activeItem: "Search Artist"};

    render() {
        return (
            <Container style={{marginTop:"1em", width:"100%"}}>
            <Segment inverted>
                    <Title></Title>
                    <Divider></Divider>
                    <Grid columns={2} divided stackable fluid="true">
                        <Grid.Column floated="left" width={4}>
                            <Search></Search>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Container>{this.props.children}</Container>
                        </Grid.Column>
                    </Grid>
                    <Admin floated="right"></Admin>
                    <Divider></Divider>
                    <Footer style={{bottom:"0"}}></Footer>
            </Segment>
            </Container>
        );
    } 
}
