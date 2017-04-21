export default function eventReducer(state=[], action){
  switch (action.type) {
    case 'RECEIVE_EVENT':
      return state.concat(action.payload)
    case 'ADD_EVENT':
      return state.concat(action.payload)
    case 'EDIT_EVENT':
      return state.filter(event => event.id != action.event.id).concat(action.event)
    default:
      return state
  }
}
