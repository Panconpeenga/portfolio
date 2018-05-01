import React, { Component } from 'react';

class TodoItem extends Component {
  render () {
    return (
      <li className='Name'>
        <strong>
          Name: {this.props.name}<br />
          Height: {this.props.height}<br />
          Mass: {this.props.mass}<br />
          <br />
        </strong>
      </li>
    );
  }
}

export default TodoItem;
