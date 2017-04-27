import React from 'react'
import { push } from 'react-router-redux'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import addEvent from '../actions/addEvent'
import NavbarMain from '../components/NavbarMain'


class NewEvent extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      description: '',
      website: '',
      date: '',
      cost: '',
      perks: '',
      organizer: '',
      city: '',
      image: '',
      topic: '',
      address: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.showTopics = this.showTopics.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.addEvent = this.addEvent.bind(this)
    // this.redirect = this.redirect.bind(this)
  }
  // redirect(){
  //   return (
  //     <Redirect to={`/events/${this.state.id}`} />
  //   )
  //   // return this.props.history.push(`/events/${id}`)
  // }
  handleSubmit(event){
    event.preventDefault()
    let params = this.state
    axios
    .post('http://localhost:3001/v1/events', {event: params} )
    .then((response) => {
      let createdEvent = response.data.data.attributes
      createdEvent.id = response.data.data.id
      // this.setState(
      //   {id: createdEvent.id,
      //     submitted: true})
      this.props.addEvent(createdEvent)
      this.props.push(`/events/${createdEvent.id}`)
    })
    .catch((error) => {
      throw(error)
    })
  }
  addEvent(event){
    this.props.addEvent(event)
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

  render() {

    // {this.state.submitted ? this.redirect() : null }
    return(
      <div>
        <NavbarMain />
        <h1>Add Your Conference!</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="name" type='text' value={this.state.name} onChange={this.handleOnChange} placeholder="Event Name" /><br />
          <textarea name="description" value={this.state.description} onChange={this.handleOnChange} type='text' placeholder="Event Description" /><br />
          <input name="website" type='text' value={this.state.website} onChange={this.handleOnChange} placeholder="Website URL" /><br />
          <input name="image" type='text' value={this.state.image} onChange={this.handleOnChange} placeholder="Image URL" /><br />
          <input name="date" type="text" value={this.state.date} onChange={this.handleOnChange} placeholder="Enter Date" /><br />
          <input name="cost" type='text' value={this.state.cost} onChange={this.handleOnChange} placeholder="Event Cost" /><br />
          <textarea name="perks" type='text' value={this.state.perks} onChange={this.handleOnChange} placeholder="Presenter Perks" /><br />
          <input name="organizer" type='text' value={this.state.organizer} onChange={this.handleOnChange} placeholder="Organizer" /><br />
          <input name="city" type='text' value={this.state.city} onChange={this.handleOnChange} placeholder="City" /><br />
          <input name="address" type='text' value={this.state.address} onChange={this.handleOnChange} placeholder="Address" /><br />
          <ButtonGroup vertical>
          <DropdownButton title={this.state.topic ? this.state.topic : 'Select Topic'} id="bg-vertical-dropdown-1" onSelect={this.handleSelect}>
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
export default connect(mapStateToProps, mapDispatchToProps)(NewEvent)

function mapStateToProps (state) {
  return {topics: state.topics,
          sessions: state.session}
    }

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addEvent,
    push
  }, dispatch)
}
