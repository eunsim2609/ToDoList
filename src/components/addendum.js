import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import '../App.scss'

class Addendum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      createTitle: [],
      id: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleTitleList = () => {
    this.setState({
      createTitle: [...this.state.createTitle, this.state.title],
      title: ''
    })
  }

  handleCreate = (id) => {
    this.setState({
      id: id.target.key,
      createTitle: this.state.createTitle.concat({ id: this.id++, ...this.state.createTitle })
    })
  }

  handleRemove = () => {
    const { id } = this.state;
    this.setState({
      createTitle: this.state.createTitle.filter(a => a.key !== id)
    })
  }

  render() {
    const addendum =
    < InputGroup className="mb-3" >
      <FormControl
        value={this.state.title}
        onChange={this.handleChange}
        placeholder="add...."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={this.handleTitleList}>
          add</Button>
      </InputGroup.Append>
    </InputGroup >
    if (!this.state.createTitle) return null;
    const addTitle = this.state.createTitle.map((a) => {
      return (
        <div
        key={this.state.id}
        onCreate={this.handleCreate}
        className="TOC">
          <p>{a}</p>
          <button onClick={this.handleRemove}
                  type="button">
                    X
          </button>
        </div>
      )
    })

    return (
      <div>
        <div className="addendum">
          {addendum}
        </div>
        <div className="contents">
          {addTitle}
        </div>
      </div>
    );
  }
}

export default Addendum;