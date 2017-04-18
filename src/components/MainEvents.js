import React from 'react';
import axios from 'axios'
import addEvents from '../actions/addEvents'
import { connect } from 'react-redux'


class MainEvents extends React.Component {
  constructor() {
    super()
    this.getEvents = this.getEvents.bind(this)

  }
  getEvents(){
    axios
    .get('http://localhost:3001/v1/events')
    .then((resp) => {
        debugger
      })
  }
  render(){
    return (
      <div>
      {this.getEvents()}
      </div>
    )
  }
}

export default connect(mapStateToProps)(MainEvents)

const mapStateToProps = (state) => {
  events: state.events
}
