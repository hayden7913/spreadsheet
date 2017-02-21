import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Column from './components/Column.js';
import Button from './components/Button';

const style = {
  'display': 'flex'
}

class App extends Component {
  
/*  componentDidMount() {
      console.log('hello');
      fetch(
        "http://localHost:8080/test",
        {method: 'get'})
      .then((res) => {
        return res.json();
      })
      .then(data => {console.log(data); this.state = data})
    }*/
    
    componentDidMount() {
      console.log('hello');
      fetch("http://localHost:8080/test",
      {
          method: "POST",
          body: JSON.stringify({position: [1,1]}),
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        })
      })
      .then(function(res){ return res.json(); })
      .then(function(data){ alert( JSON.stringify( data ) ) })
    }
    
  render() {
    let columns = [];
    for (let i = 0, j = 0; i < 4; i++, j+=2) {
      columns.push(<div key={i}><Column x={i} /></div>);
    }
    return (
    <div>
      <div style={style}>
        {columns}
      </div>
      <Button />
    </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
