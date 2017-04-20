import cities from './cityReducer'
import events from './eventReducer'
import topics from './topicReducer'
import search from './searchReducer'
import eventShow from './eventShowReducer'
import topicShow from './topicShowReducer'
import session from './sessionReducer'


import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  cities,
  events,
  topics,
  search,
  eventShow,
  topicShow,
  session,
  router: routerReducer
})
