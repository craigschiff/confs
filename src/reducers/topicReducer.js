export default function topicReducer(state=[], action){
  switch (action.type) {
    case 'RECEIVE_TOPIC':
      return state.concat(action.payload)

    default:
      return state
  }
}
