import cities from './cityReducer'
import events from './eventReducer'
import topics from './topicReducer'
import search from './searchReducer'

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  cities,
  events,
  topics,
  search,
  router: routerReducer
})
