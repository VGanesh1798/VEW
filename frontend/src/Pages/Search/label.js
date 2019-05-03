import React from "react";
import { Segment, Header, Divider, Form, Button, Container } from "semantic-ui-react";

export default class LabelSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            super: "",
            ceo: "",
            hq: "",
            date: "",
            lablist: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        alert(this.state.date)
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <Segment inverted>
                <Header as="h3">Search Label</Header>
                <p>
                    Please enter values for querying for a label.
                </p>
                <Divider/>
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Input label="Name" name="name" placeholder="Name" type="text" value={this.state.name} onChange={this.handleChange} />
                    <Form.Input label="Super-Company" name="super" placeholder="Super" type="text" value={this.state.super} onChange={this.handleChange} />
                    <Form.Input label="CEO" name="ceo" placeholder="CEO" type="text" value={this.state.ceo} onChange={this.handleChange} />
                    <Form.Input label="HQ Location" name="hq" placeholder="HQ" type="text" value={this.state.hq} onChange={this.handleChange} />
                    <Form.Input label="Year Founded" name="date" placeholder="Date" type="number" value={this.state.date} onChange={this.handleChange} />
                    <Button type="submit" color="green">Search!</Button>
                </Form>
                <Divider/>
                <Header as="h4">Results</Header>
                <Container textAlign="center">
                    {this.state.lablist}
                </Container>
            </Segment>
        );
    }
}