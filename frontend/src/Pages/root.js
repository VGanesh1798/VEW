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
            <div style={{minHeight:"100vh", display:'flex'}}>
                <Segment inverted>
                    <div style={{paddingBottom:'60px'}}>
                        <Title />
                        <Divider />
                        <Grid columns={3} fluid="true" stackable centered>
                            <Grid.Column>
                                <Search />
                            </Grid.Column>
                            <Grid.Column>
                                <Container>{this.props.children}</Container>
                            </Grid.Column>
                            <Grid.Column>
                            <Admin />
                            </Grid.Column>
                        </Grid>
                    </div>
                    <div style={{position:'absolute', bottom:'0', width:'100%'}}>
                        <Divider />
                        <Footer />
                    </div>
                </Segment>
            </div>
        );
    } 
}
