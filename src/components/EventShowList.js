import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import setEvent from '../actions/setEvent'


class EventShowList extends React.Component {
  componentWillReceiveProps(nextProps){
    if (nextProps == this.props) { return }
    let id = parseInt(nextProps.match.params.id, 10)
    let event = this.props.events.filter(event => id == event.id)
    this.props.setEvent(event[0])
  }
  componentWillMount(){
    if (this.props.showEvent.name) { return }
    let id = parseInt(this.props.match.params.id, 10)
    let event = this.props.events.filter(event => id == event.id)
    this.props.setEvent(event[0])
  }
  render(){

    let event = this.props.showEvent

    return (
      <div>
        <h1>{event.name}</h1><br />
        {event.date.split('T').shift().split('-').reverse().join('/')}<br />
        {event.description}<br />
        <a href={event.website}>Check out their website</a><br />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShowList)

function mapStateToProps (state) {
  return {
    events: state.events,
    showEvent: state.eventShowList
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setEvent
  }, dispatch)
}
