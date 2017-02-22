import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';

const style = {
  height: '100%',
  width: '100%',
  backgroundColor: 'green',
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
});

const cardSource = {
  beginDrag(props) {
    return {};
  },

  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      // console.log(dropResult);
    }
  },


};

class Card extends Component {
  constructor(props) {
    super(props);
  }

  /* componentDidMount() {
    console.log(this.props.x);
    fetch("http://localHost:8080/test",
    {
        method: "POST",
        body: JSON.stringify({position: [this.props.x, this.props.y]}),
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      })
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ alert( JSON.stringify( data ) ) })
  }*/

  render() {
    return this.props.connectDragSource(
      <div style={style} />,
    );
  }
}

Card = DragSource('Card', cardSource, collect)(Card);
export default connect()(Card);
