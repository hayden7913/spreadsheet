import * as actions from '../actions/index';

const initialTaskListState = {pos: [0,0]};

export const spreadSheetReducer = (state=initialTaskListState, action) => {
  if (action.type === actions.MOVE_DOWN) {
    return {pos: action.pos};
  }
  return state;
}
