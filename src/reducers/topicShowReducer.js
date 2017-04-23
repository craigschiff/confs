export default function topicShowReducer(state={}, action){
  switch (action.type) {
    case 'SET_TOPIC':
      debugger
      return action.topic
    case 'CLEAR_TOPIC':
      return []
    default:
      return state
  }
}
