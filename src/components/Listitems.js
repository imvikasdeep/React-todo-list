import React from 'react';
import '../App.css';
import { Component } from 'react';

class Listitems extends Component {
    render() {

        const items = this.props.items;
        const listItems = items.map(item => {
            return <div className="listItem" key={item.key}><span>{item.value}</span> <i onClick={() => this.props.deleteItem(item.key)}>X</i></div>
        })

        return ( 
            <h1>{listItems}</h1>
         );
    }
}
 
export default Listitems;