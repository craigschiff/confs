import React from 'react';
import setEvent from '../actions/setEvent'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginPage from './LoginPage'
import NavbarMain from './NavbarMain'


class EventShow extends React.Component {
  constructor(){
    debugger
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillReceiveProps(nextProps){
    if (nextProps === this.props) { return }
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
  handleClick(){
    if (sessionStorage.getItem('jwt')){
      this.props.push(`/events/${this.props.match.params.id}/edit`)
    } else {
      alert('YOU NEED TO LOG IN FIRST')
      return <LoginPage />
    }
  }

  render(){

    let event = this.props.showEvent

    return (
      <div>
      <NavbarMain />
        <h1>{event.name}</h1><br />
        {event.date}<br />
        {event.cost}<br />
        {event.description}<br />
        <a href={event.website}> Check it out on Eventbrite</a><br />
        <button onClick={this.handleClick}>Edit Event</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow)

function mapStateToProps (state) {
  return {
    events: state.events,
    showEvent: state.eventShow
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setEvent,
    push: push
  }, dispatch)
}
