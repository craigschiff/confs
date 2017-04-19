export default function topicShowReducer(state=[], action){
  switch (action.type) {
    case 'SET_TOPIC':
      return action.payload
    case 'CLEAR_TOPIC':
      return []
    default:
      return state
  }
}
