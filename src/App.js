import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ToDoDate from './components/toDoDate';
import ToDoList from './components/toDoList';
import ToDoAdd from './components/toDoAdd';



class App extends Component {
  id = 4;
  state = {
    toDoList: [{
      id: 1,
      text: '프로그래밍'
    },
    {
      id: 2,
      text: '운동'
    },
    {
      id: 3,
      text: '식단'
    }],
  };

  handleCreate = (data) => {
    const { toDoList } = this.state;
    this.setState({
      toDoList: toDoList.concat({ id: this.id++, ...data })
    });
  }

  handleRemove = (id) => {
    const { toDoList } = this.state;
    this.setState({
      toDoList: toDoList.filter((data) => data.id !== id)
    })
  }

  render() {
    const { toDoList } = this.state;
    return (
      <div className="App">
        <div className="Date">
          <ToDoDate />
        </div>
        <div className="Add">
          <ToDoAdd onCreate={this.handleCreate} />
        </div>
        <div className="List">
          <ToDoList data={toDoList} onRemove={this.handleRemove} />
        </div>
      </div>
    );
  }
}

export default App;
