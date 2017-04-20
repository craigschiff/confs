import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import setTopic from '../actions/setEvent'


class TopicList extends React.Component {
  componentWillReceiveProps(nextProps){
    if (nextProps == this.props) { return }
    // let id = parseInt(nextProps.match.params.id, 10)
    // let event = this.props.events.filter(event => id == event.id)
    // this.props.setEvent(event[0])
  }
  componentWillMount(){
    if (this.props.showEvent.name) { return }
    debugger
    // let id = parseInt(this.props.match.params.id, 10)
    // let event = this.props.events.filter(event => id == event.id)
    // this.props.setEvent(event[0])
  }
  render(){

    // let event = this.props.showEvent

    return (
      <div>
        <h1>{event.name}</h1><br />
        {event.date}<br />
        {event.cost}<br />
        {event.description}<br />
        {event.website}<br />
      </div>
    )
  }
}
