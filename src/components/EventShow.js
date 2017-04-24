import React from 'react';
import setEvent from '../actions/setEvent'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginPage from './LoginPage'
import NavbarMain from './NavbarMain'


class EventShow extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      needLogin: false
    }
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
    if (localStorage.getItem('jwt')){
      this.props.push(`/events/${this.props.match.params.id}/edit`)
    } else {
      alert('YOU NEED TO LOG IN FIRST')
      this.setState({needLogin: true})
      // this.props.push('/login')
    }
  }


  render(){

    let event = this.props.showEvent

    return (
      <div>

        <NavbarMain />
        <div>
        <h1>{event.name}</h1><br />
        <strong>Date: </strong>{event.date ? event.date.slice(0,10) : null}<br />
        <img src={event.image} /><br />
        <strong>Cost: </strong>{event.cost}<br />
        <strong>Description: </strong>{event.description}<br />
        <strong>Website: </strong><br />
        <strong>Organizer: </strong>{event.organizer ? event.organizer.name : null}<br />
        <strong>Topic: </strong>{event.topic ? event.topic.name : null}<br />


        <button onClick={this.handleClick}>Edit Event</button>
        </div>
        {this.state.needLogin ? <LoginPage path={`/events/${this.props.match.params.id}/edit`} /> : null}
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
