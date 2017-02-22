import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import Column from './components/Column';
import * as actions from './actions/index';

const style = {
  display: 'flex',
};

class App extends Component {
  componentDidMount() {
    this.props.getInitialPosition('http://localHost:8080/test');
  }

  render() {
    const columns = [];
    for (let i = 0, j = 0; i < 4; i++, j += 2) {
      columns.push(<div key={i}><Column x={i} /></div>);
    }
    return (
      <div>
        <div style={style}>
          {columns}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getInitialPosition: url => dispatch(actions.fetchInitialPosition(url)),
});

App = DragDropContext(HTML5Backend)(App);
export default connect(null, mapDispatchToProps)(App);
