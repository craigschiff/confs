import React from 'react';
import axios from 'axios'
// import addEvents from '../actions/addEvents'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import ListEvent from './ListEvent'
import { Route } from 'react-router-dom'
import EventShow from './EventShow'



class MainEvents extends React.Component {
  constructor() {
    super()
    this.getEvents = this.getEvents.bind(this)
    // this.sendEvents = this.sendEvents.bind(this)

  }
  // sendEvents(){
  //   axios
  //   .get('http://localhost:3001/v1/events')
  //   .then((resp) => {
  //       let events = resp.data.data
  //       events.forEach((event) => {
  //         // if (!this.props.events.includes(event)) {
  //         //   this.props.addEvents(event)
  //         // }
  //       })
  //     })
  // }
  getEvents() {
    return this.props.events.map((event) => {
      debugger
      return <ListEvent event={event} />
    })

  }
  render(){
    return (
      <div>
        {this.props.events.map((event) => {
          return <ListEvent event={event} />
        })}

      </div>
    )
  }
}


const mapStateToProps = (state) => {
  if (state.search.length > 0){
    return {events: state.search}
  } else {
    return {events: state.events}
  }
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     addEvents
//   }, dispatch)
// }

export default connect(mapStateToProps)(MainEvents)
