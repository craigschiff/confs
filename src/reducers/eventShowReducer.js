export default function eventShowReducer(state={}, action){
  switch (action.type) {
    case 'SET_EVENT':
      return action.event || state
    case 'CLEAR_EVENT':
      return {}
    default:
      return state
  }
}
