import React from 'react';
// import addEvents from '../actions/addEvents'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import ListEvent from './ListEvent'


class MainEvents extends React.Component {
  constructor() {
    super()
    this.getEvents = this.getEvents.bind(this)

  }
  getEvents() {
    return this.props.events.map((event, index) => {
      return <ListEvent key={index} event={event} />
    })

  }
  render(){
    return (
      <div>
        {this.props.events.map((event, index) => {
          return <ListEvent key={index} event={event} />
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
