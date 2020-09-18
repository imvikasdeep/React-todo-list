import React from 'react';
import './App.css';
import { Component } from 'react';
import Listitems from './components/Listitems';

class App extends Component {
  state = {
    items: [],
    currentItem: {
      value: '',
      key: '',
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        value: e.target.value,
        key: Date.now(),
      }
    });
    
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.value !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          value: '',
          key: '',
        }
      });
    }
  }

  handleDelete = (key) => {
    const filteredItems = this.state.items.filter(item => item.key!== key);
    this.setState({
      items: filteredItems,
    })
  }

  render() {
    return ( 
      <div className="form-contianer">
        <h3>Add Your Tasks</h3>
        <form action="" onSubmit={this.addItem}>
            <input type="text" name="" id="" placeholder="Enter Value" value={this.state.currentItem.value} onChange={this.handleInput}/>
            <button type="submit">Add</button>
        </form>
        <Listitems items={this.state.items} deleteItem={this.handleDelete}/>
      </div>
     );
  }
}
 
export default App;
