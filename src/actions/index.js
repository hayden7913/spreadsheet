export const MOVE_DOWN = 'MOVE_DOWN';
export const moveDown = pos => ({
  type: MOVE_DOWN,
    pos
});

export function itemsFetchData(url) {
    return (dispatch) => {
      
      fetch(
        url,
        {method: 'get'})
      .then((res) => {
        return res.json();
      })
      .then(data => {console.log(data);})
    }
        
        /*fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };*/
}
