export default function cityReducer(state=[], action){
  switch (action.type) {
    case 'ADD_CITY':
      return state.concat(action.payload)

    default:
      return state
  }
}
