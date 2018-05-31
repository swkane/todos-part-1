import React, { Component } from 'react';
import todoList from './todos.json';
import './App.css';

class TodoItem extends Component {
  state = {
    completed: this.props.completed
  }

  render() {
    return (
      <li className={this.state.completed}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.state.completed} />
            <label>{this.props.text}</label>
            <button className="destroy"></button>
				</div>
			</li>
    );
  }
}

class TodoList extends Component {
  state = {
    todos: todoList
  }

  render() {
    return (
      <ul class="todo-list">
        {this.state.todos.map(todo => <TodoItem key={todo.id} text={todo.title} completed={todo.completed} />)}  
			</ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <section class="todoapp">
        <header class="header">
          <h1>todos</h1>
          <input class="new-todo" placeholder="What needs to be done?" autofocus />
			  </header>
          {/* <!-- This section should be hidden by default and shown when there are todos --> */}
			  <section class="main">
          <TodoList />
			  </section>
        {/* <!-- This footer should hidden by default and shown when there are todos --> */}
			  <footer class="footer">
          {/* <!-- This should be `0 items left` by default --> */}
				  <span class="todo-count"><strong>0</strong> item(s) left</span>
          {/* <!-- Remove this if you don't implement routing --> */}
				  {/* <!-- Hidden if no completed items are left ↓ --> */}
				  <button class="clear-completed">Clear completed</button>
        </footer>
		</section>
    );
  }
}

export default App;
