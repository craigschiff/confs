export default function setEventReducer(state=[], action){
  switch (action.type) {
    case 'SET_EVENT':
      return state.concat(action.payload)
    case 'CLEAR_EVENT':
      return []
    default:
      return state
  }
}
