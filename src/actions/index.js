export const MOVE_DOWN = 'MOVE_DOWN';
export function moveDown(pos) {
  return {
    type: MOVE_DOWN,
    pos,
  };
};

export const FIRST_RENDER = 'FIRST_RENDER';
export function firstRender(bool) {
  return {
    type: FIRST_RENDER,
    cardHasRendered: bool
  };
};

export const FETCH_POSITION_SUCCESS = 'FETCH_POSITION_SUCCESS';
export function fetchPositionSuccess(pos) {
  return {
    type: FETCH_POSITION_SUCCESS,
    pos
  };
};

export function fetchInitialPosition(url) {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      dispatch(fetchPositionSuccess(data));
    })
    .catch((err) => {
      console.error(err);
    });
  };
}
