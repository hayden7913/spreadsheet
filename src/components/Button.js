import React, {Component} from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';


const style = {
  "height": "100%",
  "width": "100%",
  "backgroundColor": "green"
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.moveDown = this.moveDown.bind(this);
  }

  moveDown() {
    this.props.dispatch(actions.moveDown(3));
  }

  render () {
    return <button onClick={this.moveDown}> Click </button>
  }
}


export default connect()(Button);
