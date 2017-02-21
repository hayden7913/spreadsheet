import React, { Component } from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  /*componentDidMount() {
    console.log('hello');
    fetch(
      "http://localHost:8080/test",
      {
        method: 'get'
    })
    .then((res) => {
      return res.json();
    })
    .then(data => {console.log(data); this.state = data})
  }*/
  
  componentDidMount() {
    fetch("http://localHost:8080/test",
    {
        method: "POST",
        body: JSON.stringify({position: [1,1]}),
        headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ alert( JSON.stringify( data ) ) })
  }

  render() {

    return (
      <div style={{color: 'red'}}>
        Hellow World
      </div>
    );
  }
}
