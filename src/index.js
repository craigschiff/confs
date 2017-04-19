//bbeeff
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import App from './App';
import Home from './components/Home'
import NewEvent from './components/NewEvent'
import EventShow from './components/EventShow'
import TopicShow from './components/TopicShow'

import { Provider } from 'react-redux';
import './index.css';
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
  Link,
  Switch
} from 'react-router-dom'

const history = createHistory()
const rMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, rMiddleware)
)

axios
.get('http://localhost:3001/v1/events')
.then((resp) => {
    let events = resp.data.data
    let newEvent
    events.forEach((event) => {
      newEvent = event.attributes
      newEvent.id = event.id
      store.dispatch({type: "RECEIVE_EVENT", payload: newEvent})
    })
    ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/events" component={App} />
              <Route exact path="/events/new" component={NewEvent} />
              <Route path="/events/:id" component={EventShow} />
              <Route exact path="/topics/:id" component={TopicShow} />
            </Switch>
          </div>
        </Router>
      </Provider>, document.getElementById('container')
    );
  })
axios
.get('http://localhost:3001/v1/topics')
.then((resp) => {
    let topics = resp.data.data
    topics.forEach((topic) => {
      store.dispatch({type: "RECEIVE_TOPIC", payload: topic.attributes})
    })
  })
