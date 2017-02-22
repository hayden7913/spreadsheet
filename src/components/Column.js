import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Cell from './Cell.js';


class Column extends Component {
  constructor(props) {
    super(props);
  }

  renderCell(i) {
    const [cardX, cardY] = this.props.state.pos;
    if (cardX === this.props.x && cardY === i) {
      return (<div key={i}><Cell x={this.props.x} y={i} hasCard /></div>);
    }
    return (<div key={i}><Cell x={this.props.x} y={i} /></div>);
  }

  render() {
    const cells = [];
    for (let i = 0; i < 5; i++) {
      cells.push(this.renderCell(i));
    }
    return (
      <div>
        {cells}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  state,
});

export default connect(mapStateToProps)(Column);
