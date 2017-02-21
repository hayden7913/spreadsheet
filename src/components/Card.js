import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import { connect } from 'react-redux';

const style = {
  "height": "100%",
  "width": "100%",
  "backgroundColor": "green"
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource()
});

const cardSource = {
  beginDrag(props) {
    return {};
  },

  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      //console.log(dropResult);
    }
  },


}

class Card extends Component {
  constructor (props){
    super(props)
  }

  render () {
    return this.props.connectDragSource(
       <div style={style}></div>
    )
  }
}

Card = DragSource("Card", cardSource, collect)(Card);
export default connect()(Card);
