export default function searchReducer(state=[], action){
  switch (action.type) {
    case 'ADD_SEARCH':
      return state.concat(action.payload)
    case 'CLEAR_SEARCH':
      return []
    default:
      return state
  }
}
