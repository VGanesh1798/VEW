import React from "react";
import { Segment, Header, Divider, Form, Button } from "semantic-ui-react";
import axios from "axios";

export default class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            aid: "",
            artist: "",
            name: "",
            rating: "",
            ur: {},
            exists: false
        }
    }

    componentDidMount() {
        this.setState({aid: this.props.location.state.id, name: this.props.location.state.name});
        axios.get("http://localhost:5000/rate")
            .then((response) => {
                this.setState({user: response.data});
                axios.post("http://localhost:5000/checkrate", {
                        user: this.state.user,
                        id: this.props.location.state.id,
                        name: this.props.location.state.name
                    })
                    .then((response) => {
                        if(response.data.length !== 0) {
                            this.setState({exists: true});
                        }
                    })
            })
        axios.post("http://localhost:5000/artbyid", {id: this.props.location.state.id})
            .then((response) => {
                this.setState({artist: response.data})
            })
        }

    handleChange = (e, ur) => {
        console.log(e.target.value);
        this.setState({ ur });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/addrate", {
                user: this.state.user,
                id: this.props.location.state.id,
                name: this.state.name,
                rate: this.state.ur.value
            })
            .then((response) => {
                console.log(response.data);
                this.props.history.push('/home');
            })
    }

    render() {
        if(this.state.exists === true || this.state.user === "Guest") {
            return (
                <Segment inverted>
                    <Header as="h2">
                        Rating {this.state.name} by {this.state.artist} as {this.state.user}
                    </Header>
                    <Divider />
                    <p>
                        It appears you have already rated this release.
                    </p>
                </Segment>
            );
        }
        return (
            <Segment inverted>
                <Header as="h2">
                    Rating {this.state.name} by {this.state.artist} as {this.state.user}
                </Header>
                <Divider />
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Radio label="1" id="1" value="1" checked={this.state.ur.value === "1"} onChange={this.handleChange} />
                        <Form.Radio label="2" id="2" value="2" checked={this.state.ur.value === "2"} onChange={this.handleChange} />
                        <Form.Radio label="3" id="3" value="3" checked={this.state.ur.value === "3"} onChange={this.handleChange} />
                        <Form.Radio label="4" id="4" value="4" checked={this.state.ur.value === "4"} onChange={this.handleChange} />
                        <Form.Radio label="5" id="5" value="5" checked={this.state.ur.value === "5"} onChange={this.handleChange} />
                    </Form.Group>
                    <Divider />
                    <Button type="submit" color="green">Submit rating</Button>
                </Form>
            </Segment>
        );
    }
}