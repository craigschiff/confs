import React from 'react';
import setEvent from '../actions/setEvent'
import clearEvent from '../actions/setEvent'
import editEvent from '../actions/editEvent'
import axios from 'axios'
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
      needLogin: false,
      comment: '',
      name: ''
    }
    this.eventData = this.eventData.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showComments = this.showComments.bind(this)
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.showEvent.name) { return }
    let id = parseInt(nextProps.match.params.id, 10)
    this.eventData(id)
  }
  eventData(id){
    axios
    .get(`http://localhost:3001/v1/events/${id}`)
    .then((resp) => {
      let event = resp.data.data.attributes
      event.id = resp.data.data.id
      this.props.setEvent(event)
    })
  }
  componentWillMount(){
    if (this.props.showEvent.name) { return }
    let id = parseInt(this.props.match.params.id, 10)
    this.eventData(id)
  }
  handleClick(){
    if (localStorage.getItem('jwt')){
      this.props.clearEvent()
      this.props.push(`/events/${this.props.match.params.id}/edit`)
    } else {
      alert('YOU NEED TO LOG IN FIRST')
      this.setState({needLogin: true})
    }
  }
  showComments(){
    return this.props.showEvent.comments.map((comment) => {
      return (
        <div>
          <h6>Name: {comment.name}</h6><br />
          <p>Content: {comment.content}</p><br />
        </div>
      )
    })
  }
  handleSubmit(event){
    event.preventDefault()
    let params = {name: this.state.name, content: this.state.comment}
    this.setState({comment: ''})
    axios
    .post(`http://localhost:3001/v1/events/${this.props.match.params.id}/comments`, params )
    .then((resp) => {
      console.log(this.props)
      let comment = resp.data.data
      let newComment = comment.attributes
      newComment.id = comment.id
      let currentEvent = this.props.showEvent
      currentEvent.comments.push(newComment)
      this.props.editEvent(currentEvent)
    })
  }
  onChange(event){
    let key = event.target.name
    let value = event.target.value
    this.setState({[key]: value})
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
        <img src={event.image} alt='' /><br />
        {event.cost ? <strong>Cost: </strong> : null}{event.cost}<br />
        <strong>Description: </strong>{event.description}<br />
        {event.cost ? <strong>Website: </strong> : null}<br />
        <strong>Organizer: </strong>{event.organizer ? event.organizer.name : null}<br />
        <strong>Topic: </strong>{event.topic ? event.topic.name : null}<br />
        <button onClick={this.handleClick}>Edit Event</button>
        </div>
        {this.state.needLogin ? <LoginPage path={`/events/${this.props.match.params.id}/edit`} /> : null}
      </Col>
      <Col xs={4} md={6}>
        <div className='comments'>
          <h4>COMMENTS!</h4>
          <form onSubmit={this.handleSubmit}>
            <input type='text' name='name' value={this.state.name} onChange={this.onChange} placeholder='your name' /><br />
            <textarea value={this.state.comment} onChange={this.onChange} name='comment' placeholder='enter comment!' /><br />
            <input type='submit' value='submit' />
            {event.comments && event.comments.length >0 ? this.showComments() : null}
          </form>
        </div>
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
    editEvent,
    push: push
  }, dispatch)
}
