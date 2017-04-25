import React from 'react';
import setEvent from '../actions/setEvent'
import clearEvent from '../actions/setEvent'

import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginPage from './LoginPage'
import NavbarMain from './NavbarMain'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'



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
      this.props.clearEvent()
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
      <Row>
        <NavbarMain />
      </Row>
      <Col xs={8} md={6}>
        <div id="eventShowBio">
        <h2>{event.name}</h2>
        <strong>Date: </strong>{event.date ? event.date.slice(0,10) : null}<br />
        <img src={event.image} /><br />
        {event.cost ? <strong>Cost: </strong> : null}{event.cost}<br />
        <strong>Description: </strong>{event.description}<br />
        {event.cost ? <strong>Website: </strong> : null}<br />
        <strong>Organizer: </strong>{event.organizer ? event.organizer.name : null}<br />
        <strong>Topic: </strong>{event.topic ? event.topic.name : null}<br />
        <buts
        ton onClick={this.handleClick}>Edit Event</button>
        </div>
        {this.state.needLogin ? <LoginPage path={`/events/${this.props.match.params.id}/edit`} /> : null}
      </Col>
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
    clearEvent,
    push: push
  }, dispatch)
}
