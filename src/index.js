import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import App from './App';
import LoginCheck from './components/LoginCheck'
import EventShow from './components/EventShow'
// import NavbarMain from './components/NavbarMain'

import EventEdit from './components/EventEdit'
import TopicShow from './components/TopicShow'
import LoginPage from './components/LoginPage'
import AboutPage from './components/AboutPage'

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import axios from 'axios'
import createHistory from 'history/createBrowserHistory'
import {
  ConnectedRouter as Router,
  routerMiddleware
} from 'react-router-redux'
import {
  Route,
  Switch
} from 'react-router-dom'

const history = createHistory()
const rMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, rMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={LoginPage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/events" component={App} />
          <Route path="/events/new" component={LoginCheck} />
          <Route path="/events/:id/edit" component={EventEdit} />
          <Route exact path="/events/:id" component={EventShow} />
          <Route path="/topics/:id" component={TopicShow} />
        </Switch>
      </div>
    </Router>
  </Provider>, document.getElementById('container')
);

const getEvents = () => {
  return (dispatch) => {
  axios
  .get('http://localhost:3001/v1/events')
  .then((resp) => {
      let events = resp.data.data
      let newEvent
      let topicIds = []
      let topic
      let map = events.reduce((map, event) => {
        newEvent = event.attributes
        newEvent.id = event.id
        topic = event.attributes.topic
        if (!topicIds.includes(topic.id)){
          topicIds.push(topic.id)
          map.topics.push(topic)
        }
        newEvent.city = event.relationships.city.data
        newEvent.organizer = event.relationships.organizer.data
        map.events.push(newEvent)
        return map
      }, {events:[], topics: []})
      dispatch({type: "RECEIVE_TOPICS", payload: map.topics})
      dispatch({type: "RECEIVE_EVENTS", payload: map.events})
    })
  }
}

store.dispatch(getEvents())
