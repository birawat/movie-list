const INITIAL_STATE = {
    movies: {}
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
      case 'FETCH_MOVIES_SUCCESS':
          return {
              ...state,
              movies: action.data
          }
      
      default:
          return state;
  }
}