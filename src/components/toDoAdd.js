import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import '../App.scss';

class ToDoAdd extends Component {
    state = {
        text: '',
    };

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    handleSubmit = () => {
        this.props.onCreate(this.state);
        this.setState({
            text: '',
        });
    };

    render() {
        const { text } = this.state;
        return (
            <InputGroup
                className="mb-3">
                <FormControl
                    value={text}
                    onChange={this.handleChange}
                    placeholder="add...."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button
                        onClick={this.handleSubmit}
                        variant="outline-secondary">
                        add</Button>
                </InputGroup.Append>
            </InputGroup >

        );
    }
}

export default ToDoAdd;