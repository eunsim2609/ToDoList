import React, { Component } from 'react';

class ToDoInfo extends Component {
    render() {
        const { data, onRemove } = this.props;
        return(
            <div className="TOC">
                <span>{ data.text }</span>
                <button onClick={() => onRemove(data.id)}>X</button>
            </div>
        );
    }
}

export default ToDoInfo;