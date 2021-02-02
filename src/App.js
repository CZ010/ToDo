import React, {Component} from 'react';
import './App.css';
import List from './todo/List';
import Form from './todo/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(id) {
    this.setState({todo: this.state.todo.map( item => {
      if (item.id === id) {
        // return {...item, completed: !item.completed}
        item.completed = !item.completed
      }

      return item;
    })});
  }

  onSubmit(text) {
    let list = this.state.todo.slice();
    let forId = Date.now();
    let val = {id: forId, title: text, completed: false}
    list.push(val);
    this.setState({todo: list});
  }

  onDelete(id) {
    let list = this.state.todo.slice();
    list = list.filter((item) => {
      return item.id !== id;
    })
    this.setState({todo: list});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form onCreate={this.onSubmit} list={this.state.todo}/>
          <List list={this.state.todo} onDelete={this.onDelete} onToggle={this.onToggle}/>
        </header>
      </div>
    );
  }
}

export default App;

