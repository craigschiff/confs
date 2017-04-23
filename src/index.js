//bbeeff
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
              <Route exact path="/" component={App} />
              <Route path="/login" component={LoginPage} />
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
  })
// axios
// .post('http://localhost:3001/v1/username=dison')
//
axios
.get('http://localhost:3001/v1/topics')
.then((resp) => {
    let topics = resp.data.data
    topics.forEach((topic) => {
      store.dispatch({type: "RECEIVE_TOPIC", payload: topic.attributes})
    })
  })
