import React, { Component } from 'react';
import ToDoInfo from './toDoInfo';
import '../App.scss';

class ToDoList extends Component {
    render(){
        const { data, onRemove } = this.props;

        return (
            <div className="todolist">
                <ul>
                    {data.map((data) => (
                        <li>
                            <ToDoInfo data={data} onRemove={onRemove} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ToDoList;