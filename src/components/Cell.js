import React, { Component } from 'react';
import Card from './Card.js'
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget()
  });

const cellTarget = {
  drop(props){
    props.dispatch(actions.moveDown([props.x, props.y]))
    return;
  }
}

const style = {
  "height": "100px",
  "width": "200px",
  "border": "1px solid #000"
}

class Cell extends Component {
  constructor(props) {
    super(props);
  }
  

  render () {

    let cell;
    if(this.props.hasCard === true)
      cell =  <div style={style} x={this.props.x} y={this.props.y}><Card/></div>
    else
      cell = <div style={style} x={this.props.x} y={this.props.y}></div>

    return this.props.connectDropTarget(cell);
  }
}

Cell = DropTarget("Card", cellTarget, collect)(Cell);
export default connect()(Cell)
