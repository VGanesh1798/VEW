import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Divider, Form, Button, Grid } from "semantic-ui-react";
import axios from "axios";

export default class LabelSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            super: "",
            ceo: "",
            date: "",
            lablist: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log("Searching...");

        axios.post("http://localhost:5000/label", {
                name: this.state.name,
                super: this.state.super,
                ceo: this.state.ceo,
                year: this.state.date
            })
            .then( (response) => {
                this.setState({lablist: response.data});
                console.log(this.state.lablist);
                alert("Received: " + Object.keys(this.state.lablist).length + " results.");
            })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const idlist = Object.keys(this.state.lablist);
        const outlist = idlist.map((value) =>
        <ol key={value} style={{fontSize:"20px"}}>
            <Link style={{color:"white"}} to={{pathname: "/label", state: {id: value} }}>{value}</Link>
        </ol>);

        return (
            <Segment inverted>
                <Grid inverted divided columns={2}> 
                    <Grid.Column>
                        <Header inverted as="h3">Search Label</Header>
                        <p>
                            Please enter values for querying for a label.
                        </p>
                        <Divider/>
                        <Form inverted onSubmit={this.handleSubmit}>
                            <Form.Input label="Name" name="name" placeholder="Name" type="text" value={this.state.name} onChange={this.handleChange} />
                            <Form.Input label="Super-Company" name="super" placeholder="Super" type="text" value={this.state.super} onChange={this.handleChange} />
                            <Form.Input label="CEO" name="ceo" placeholder="CEO" type="text" value={this.state.ceo} onChange={this.handleChange} />
                            <Form.Input label="Year Founded" name="date" placeholder="Date" type="number" value={this.state.date} onChange={this.handleChange} />
                            <Button type="submit" color="green">Search!</Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column>
                        <Header inverted as="h4">Results</Header>
                        <Divider />
                        <Segment inverted textAlign="center">
                            {outlist}
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}