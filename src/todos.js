import React, { Component } from 'react';
import { withRouter } from "react-router";


import Item from "./item";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      loading: true,
    }

    this.handleType = this.handleType.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleType(e) {
    this.props.router.replace(`${this.props.location.pathname}?value=${e.target.value}`)
  }

  handleAdd(e) {
    if (e.key !== "Enter") return;
    this.props.router.replace("/todos");

    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Date.now(),
          text: this.props.location.query.value,
          complete: false,
        }
      ]
    })
  }

  handleDelete(index) {
    const newTodos = [
      ...this.state.todos
    ]

    newTodos.splice(index, 1);

    this.setState({
      todos: newTodos,
    })
  }

  render() {

    const value = this.props.location.query.value;

    if (this.state.loading) return <div>Loading</div>

    return (
      <div >
        <input 
          value={value} 
          onChange={this.handleType}
          onKeyUp={this.handleAdd}
        />
        <div>
          {
            this.state.todos.map(({text, id}, index) => {
              return (
                <Item key={id} onDelete={() => this.handleDelete(index)}>
                  {text}
                </Item>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default withRouter(Todos);
