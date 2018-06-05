import React, { Component } from 'react';
import todoList from './todos.json';
import './App.css';

class TodoItem extends Component {

  render() {
    return (
      <li className={this.props.completed ? 'completed' : ''}>
        <div className="view">
          <input onChange={this.props.onCompleted} className="toggle" type="checkbox" checked={this.props.completed} />
            <label>{this.props.text}</label>
            <button onClick={this.props.onDelete} className="destroy"></button>
				</div>
			</li>
    );
  }
}

class TodoList extends Component {

  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map( (todo, i) => <TodoItem key={i} text={todo.title} completed={todo.completed} onDelete={this.props.onDelete(i)} onCompleted={this.props.onCompleted(i)} />)}  
			</ul>
    );
  }
}

class App extends Component {
  state = {
    todos: todoList,
    text: ''
  }

  // Data Structure of a New Todo (can also view ./todos.json)
  // 
  // newTodo: {
  //   "userId": 1,
  //   "id": 0,
  //   "title": "",
  //   "completed": false
  // },

  // adding a todo
  handleEnter = (e) => {
    if (e.key === "Enter") {
      let newTodo = {
        "userId": 1,
        "id": 0,
        "title": this.state.text,
        "completed": false
      };

      this.setState(prevState => ({
        todos: [...prevState.todos, newTodo],
        text: ''
      }));
    } 
  }

  // controlled adding todo input
  handleChange = event => {
    this.setState({text: event.target.value});
  }

  // checking a todo as complete
  handleComplete = index => () => this.setState({
    todos: this.state.todos.map((todo, i) => index === i ? {
      ...todo,
      completed: !todo.completed
    } : todo)
  });

  // deleting a todo
  handleDelete = index => () => this.setState({
    todos: this.state.todos.filter((todo, i) => index !== i)
  })

  // deleting all todos marked as complete
  handleDeleteAll = () => this.setState({
    todos: this.state.todos.filter(todo => !todo.completed)
  })

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input onChange={this.handleChange}  onKeyUp={this.handleEnter} className="new-todo" value={this.state.text} autoFocus />
			  </header>
          {/* <!-- This section should be hidden by default and shown when there are todos --> */}
			  <section className="main">
          <TodoList todos={this.state.todos} onDelete={this.handleDelete} onCompleted={this.handleComplete} />
			  </section>
        {/* <!-- This footer should hidden by default and shown when there are todos --> */}
			  <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
				  <span className="todo-count"><strong>0</strong> item(s) left</span>
          <ul className="filters">
            <li>
              <a href="#/">
                All
							</a>
            </li>
            <li>
              <a href="#/active">
                Active
							</a>
            </li>
            <li>
              <a href="#/completed">
                Completed
							</a>
            </li>
          </ul>
				  {/* <!-- Hidden if no completed items are left ↓ --> */}
				  <button onClick={this.handleDeleteAll} className="clear-completed">Clear completed</button>
        </footer>
		</section>
    );
  }
}

export default App;
