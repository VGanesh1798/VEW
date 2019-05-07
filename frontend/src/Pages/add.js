import React from "react";
import { Segment, Header, Divider, Form } from "semantic-ui-react";
import axios from "axios";

export default class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/rate")
            .then((response) => {
                this.setState({user: response.data})
            })
    }

    render() {
        const options = [
            { key: 'm', text: 'Male', value: 'male' }
        ]

        return (
            <Segment inverted>
                <Header as="h2">Adding {this.props.location.state.song} as {this.state.user}</Header>
                <Divider />
                <Form inverted>
                    <Form.Select fluid label="Playlist" options={options} />
                </Form>
            </Segment>
        );
    }
}