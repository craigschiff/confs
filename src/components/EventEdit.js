import React from 'react';
import setEvent from '../actions/setEvent'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import editEvent from '../actions/editEvent'
import NavbarMain from '../components/NavbarMain'


class EventEdit extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.showEvent.name,
      description: props.showEvent.description,
      website: props.showEvent.website,
      date: props.showEvent.date,
      cost: props.showEvent.cost,
      perks: props.showEvent.perks,
      organizer: props.showEvent.organizer,
      city: props.showEvent.city,
      topic: props.showEvent.topic,
      address: props.showEvent.address,
      id: props.showEvent.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.showTopics = this.showTopics.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.editEvent = this.editEvent.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if (this.props.showEvent.name) { return }
    let id = parseInt(nextProps.match.params.id, 10)
    let event = this.props.events.filter(event => id === event.id)
    this.setState({
      name: event[0].name,
      description: event[0].description,
      website: event[0].website,
      date: event[0].date,
      cost: event[0].cost,
      perks: event[0].perks,
      organizer: event[0].organizer.name,
      city: event[0].city,
      topic: event[0].topic.name,
      address: event[0].address,
      id: event[0].id
    })
    this.props.setEvent(event[0])
    return
  }
  componentWillMount(){
    if (this.props.showEvent.name) { return }
    let id = parseInt(this.props.match.params.id, 10)
    let event = this.props.events.filter(event => id === event.id)
    this.props.setEvent(event[0])
  }

  handleSubmit(event){
    event.preventDefault()
    let params = this.state
    axios
    .post(`http://localhost:3001/v1/events/${this.state.id}`, {event: params} )
    .then((response) => {
      let editedEvent = response.data.data.attributes
      editedEvent.id = response.data.data.id
      // this.setState(
      //   {id: createdEvent.id,
      //     submitted: true})
      this.editEvent(editedEvent)
      this.props.push(`/events/${editedEvent.id}`)
    })
    .catch((error) => {
      throw(error)
    })
  }
  editEvent(event){
    this.props.editEvent(event)
  }
  handleSelect(key){
    this.setState({topic: key})
  }
  handleOnChange(event){

    let key = event.target.name
    let value = event.target.value

    this.setState({
      [key]: value
    })
  }
  showTopics(){
    return this.props.topics.map((topic) => {
      return  <MenuItem name="topic" value={topic.name} eventKey={topic.name} >{topic.name}</MenuItem>
    })
  }


  render(){

    return (
      <div>
        <NavbarMain />
        <h1>Edit Your Conference!</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="name" type='text' value={this.state.name} onChange={this.handleOnChange} placeholder="Event Name" /><br />
          <textarea name="description" value={this.state.description} onChange={this.handleOnChange} type='text' placeholder="Event Description" /><br />
          <input name="website" type='text' value={this.state.website} onChange={this.handleOnChange} placeholder="Website URL" /><br />
          <input name="date" type="text" value={this.state.date} onChange={this.handleOnChange} placeholder="Enter Date" /><br />
          <input name="cost" type='text' value={this.state.cost} onChange={this.handleOnChange} placeholder="Event Cost" /><br />
          <textarea name="perks" type='text' value={this.state.perks} onChange={this.handleOnChange} placeholder="Presenter Perks" /><br />
          <input name="organizer" type='text' value={this.state.organizer} onChange={this.handleOnChange} placeholder="Organizer" /><br />
          <input name="city" type='text' value={this.state.city} onChange={this.handleOnChange} placeholder="City" /><br />
          <input name="address" type='text' value={this.state.address} onChange={this.handleOnChange} placeholder="Address" /><br />
          <ButtonGroup vertical>
          <DropdownButton title={this.setTopic} id="bg-vertical-dropdown-1" onSelect={this.handleSelect}>
            {this.showTopics()}
          </DropdownButton>
          </ButtonGroup>
          <br />
          <label>Or if not listed enter new topic below</label><br />
          <input name="topic" type='text' value={this.state.topic} onChange={this.handleOnChange} placeholder="Topic" /><br />
          <input type='submit' value="Submit Conference" /><br />
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventEdit)

function mapStateToProps (state) {
  return {
    events: state.events,
    topics: state.topics,
    showEvent: state.eventShow
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setEvent,
    editEvent,
    push: push
  }, dispatch)
}
