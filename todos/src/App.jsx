import React, { Component } from 'react';
import todoList from './todos.json';
import './App.css';

class TodoItem extends Component {
  state = {
    completed: this.props.completed
  }

  onChange = () => {

  }

  render() {
    return (
      <li className={this.state.completed ? 'completed' : ''}>
        <div className="view">
          <input onChange={this.onChange} className="toggle" type="checkbox" checked={this.state.completed} />
            <label>{this.props.text}</label>
            <button className="destroy"></button>
				</div>
			</li>
    );
  }
}

class TodoList extends Component {

  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(todo => <TodoItem key={todo.id} text={todo.title} completed={todo.completed} />)}  
			</ul>
    );
  }
}

class App extends Component {
  state = {
    todos: todoList
  }

  addTodo = (target) => {
    this.setState( prevState => {
      return { todos: [ ...prevState.todos, target.value ] };
    });
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input onSubmit={this.addTodo} className="new-todo" placeholder="What needs to be done?" autoFocus />
			  </header>
          {/* <!-- This section should be hidden by default and shown when there are todos --> */}
			  <section className="main">
          <TodoList todos={this.state.todos} />
			  </section>
        {/* <!-- This footer should hidden by default and shown when there are todos --> */}
			  <footer className="footer">
          {/* <!-- This should be `0 items left` by default --> */}
				  <span className="todo-count"><strong>0</strong> item(s) left</span>
          {/* <!-- Remove this if you don't implement routing --> */}
				  {/* <!-- Hidden if no completed items are left ↓ --> */}
				  <button className="clear-completed">Clear completed</button>
        </footer>
		</section>
    );
  }
}

export default App;
