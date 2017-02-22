import { combineReducers } from 'redux';
import { moveDown, firstRender, fetchInitialPosition } from './items';

export default combineReducers({
  moveDown,
  firstRender,
  fetchInitialPosition
}); 