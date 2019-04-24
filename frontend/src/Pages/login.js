import React from "react";
import { Form, Header, Segment, Button, Divider, Grid } from "semantic-ui-react";

export default class Login extends React.Component {
    render() {
        return (
            <Segment inverted>
                <Header as="h3">Login</Header>
                <Divider></Divider>
                <Grid columns={2} stackable>
                    <Grid.Column>
                        <Form>
                            <Form.Field inline>
                                <label style={{color: "white"}}>Username</label>
                                <input placeholder="Username"></input>
                            </Form.Field>
                            <Form.Field inline>
                                <label style={{color: "white"}}>Password</label>
                                <input placeholder="Password"></input>
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid.Row>
                            <Button color="green" style={{marginBottom:"1em"}}>Login</Button>
                        </Grid.Row>
                        <Grid.Row>
                            <Button color="teal">Create Account</Button>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}