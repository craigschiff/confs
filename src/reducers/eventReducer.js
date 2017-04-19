export default function eventReducer(state=[], action){
  switch (action.type) {
    case 'RECEIVE_EVENT':
      return state.concat(action.payload)
    // case 'ADD_EVENT':
    //   return state.concat(action.payload)
    default:
      return state
  }
}
