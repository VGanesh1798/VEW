import React from "react";
import { Segment, Header, Divider, Button, Form } from "semantic-ui-react";
import axios from "axios";

export default class ArtistOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: "",
            id: "",
            name: "",
            year: "",
            town: "",
            style: "",
            instrument: "",
            award: "",
            ayear: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/add/artist", {
                name: this.state.name,
                year: this.state.year,
                town: this.state.town,
                style: this.state.style,
                instrument: this.state.instrument
            })
            .then( (response) => {
                console.log(response.data);
                this.props.history.push('/home');
            })
    }

    removeSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/remart", {
                id: this.state.id,
                name: this.state.name
            })
            .then((response) => {
                console.log(response.data);
                this.props.history.push('/home');
            })
    }

    awardSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/addaward", {
            id: this.state.id,
            award: this.state.award,
            ayear: this.state.ayear
        })
        .then((response) => {
            console.log(response.data);
            this.props.history.push('/home');
        })
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    makeChoice = () => {
        if(this.state.choice === "add") {
            return (
                <Segment inverted>
                    <Header as="h3">Add Artist</Header>
                    <Form inverted onSubmit={this.handleSubmit}>
                        <Form.Input label="Name" name="name" placeholder="Name" required value={this.state.name} onChange={this.handleChange} />
                        <Form.Input label="Year Born or Founded" name="year" placeholder="Year" type="number" value={this.state.year} onChange={this.handleChange} />
                        <Form.Input label="Hometown" name="town" placeholder="Hometown" value={this.state.town} onChange={this.handleChange} />
                        <Form.Input label="Style" name="style" placeholder="Style" value={this.state.style} onChange={this.handleChange} />
                        <Form.Input label="Instrument" name="instrument" placeholder="Instrument" value={this.state.instrument} onChange={this.handleChange}/>
                        <Button type="submit" color="green">Submit</Button>
                    </Form>
                </Segment>
            );
        }
        else if(this.state.choice === "remove") {
            return (
                <Segment inverted>
                    <Header as="h3">Delete Artist</Header>
                    <Form inverted onSubmit={this.removeSubmit}>
                        <Form.Input label="Name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                        <Form.Input label="ID" name="id" placeholder="ID" value={this.state.id} onChange={this.handleChange} />
                        <Button type="submit" color="red">Delete</Button>
                    </Form>
                </Segment>
            );
        }
        else if(this.state.choice === "award") {
            return (
                <Segment inverted>
                    <Header as="h3">Artist Awards</Header>
                    <Form inverted onSubmit={this.awardSubmit}>
                        <Form.Input required label="Artist ID" name="id" type="number" placeholder="ID" value={this.state.id} onChange={this.handleChange} />
                        <Form.Input required label="Award Name" name="award" placeholder="Award" value={this.state.award} onChange={this.handleChange}/>
                        <Form.Input required label="Award Year" name="ayear" type="number" placeholder="Year" value={this.state.ayear} onChange={this.handleChange} />
                        <Button type="submit" color="teal">Add</Button>
                    </Form>
                </Segment>
            );
        }
    }

    render() {
        return (
            <Segment inverted>
                <Header as="h2">Artist Options</Header>
                <p>
                    Below you will find options related to changing or removing artist information,
                    including the ability to create new artists.
                </p>
                <Divider />
                <Segment inverted>
                    <Button color="green" onClick={() => this.setState({choice: "add"})}>Add Artist</Button>
                    <Button color="red" onClick={() => this.setState({choice: "remove"})}>Delete Artist</Button>
                    <Button color="teal" onClick={() => this.setState({choice: "award"})}>Add Award for Artist</Button>
                </Segment>
                <Divider />
                <Segment inverted>
                    {this.makeChoice()}
                </Segment>
            </Segment>
        );
    }
}