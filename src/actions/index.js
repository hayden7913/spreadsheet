export const MOVE_DOWN = 'MOVE_DOWN';
export const moveDown = pos => ({
  type: MOVE_DOWN,
    pos
});

export const FETCH_POSITION_SUCCESS = 'FETCH_POSITION_SUCCESS'; 
export const fetchPositionSuccess = (pos) => ({
  type: 'FETCH_POSITION_SUCCESS',
  pos
});

export function fetchInitialPosition(url) {
  return (dispatch) => {
    
    fetch(
      url,
      {method: 'get'})
    .then((res) => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      dispatch(fetchPositionSuccess(data));
    })
    .catch(err => {
      console.error(err)
    })
  }
}
