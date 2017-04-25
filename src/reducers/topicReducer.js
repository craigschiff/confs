export default function topicReducer(state=[], action){
  switch (action.type) {
    case 'RECEIVE_TOPIC':
      return state.concat(action.topic)
    default:
      return state
  }
}
