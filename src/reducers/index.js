import * as actions from '../actions/index';

const initialTaskListState = {pos: [0,0]};

export const spreadSheetReducer = (state=initialTaskListState, action) => {
  if (action.type === actions.MOVE_DOWN) {
    return {pos: action.pos};
  }
  
  else if (action.type === actions.FETCH_POSITION_SUCCESS) {
    console.log("red", action.pos);
    return {pos: action.pos.position};
  }
  
  return state;
}
    