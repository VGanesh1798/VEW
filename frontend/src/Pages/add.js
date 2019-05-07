import React from "react";
import { Segment, Header, Divider, Form, Button } from "semantic-ui-react";
import axios from "axios";


export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            plist: [],
            choice: "",
            opts: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/add")
            .then((response) => {
                const intmed = response.data;
                const user = intmed.pop();
                this.setState({user: user, plist: intmed});

                for(let i=0; i<this.state.plist.length; i++) {
                    let choice = {key: i, text: this.state.plist[i][0], value: this.state.plist[i][0]};
                    this.state.opts.push(choice);
                }
                console.log(this.state.opts);
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.choice);
        axios.post("http://localhost:5000/add", {
                user: this.state.user,
                title: this.state.choice,
                song: this.props.location.state.song,
                rel: this.props.location.state.rel,
                id: this.props.location.state.id,
                date: this.props.location.state.date 
            })
            .then((response) => {
                console.log(response.data)
                this.props.history.push('/home');
            })
        }

    handleChange = (e, {value}) => {
        this.setState({choice: value})
    }

    render() {

        return (
            <Segment inverted>
                <Header as="h2">{this.state.user}: Adding {this.props.location.state.song} from {this.props.location.state.rel} by artistID {this.props.location.state.id}</Header>
                <Divider />
                <Form inverted onSubmit={this.handleSubmit}>
                    <Form.Select fluid label="Playlist" options={this.state.opts} onChange={this.handleChange} />
                    <Button type="submit" color="green">Add</Button>
                </Form>
            </Segment>
        );
    }
}