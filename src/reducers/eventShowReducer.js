export default function eventShowReducer(state={}, action){
  switch (action.type) {
    case 'SET_EVENT':
      return action.event
    case 'CLEAR_EVENT':
      return {}
    default:
      return state
  }
}
