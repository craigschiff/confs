import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class NewEvent extends React.Component {
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
      topic: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)

  }
  handleSubmit(event){
    event.preventDefault()
    axios
    .post('/events', {this.state} )
    .then((response) => {
      alert("SUCCESS")
    })
    .catch((response) => {
      alert("FAILURE")
    })
  }
  handleOnChange(event){
    let key = event.target.name
    let value = event.target.value

    this.setState({
      [key]: value
    })
  }
  render() {
    return(
      <div>
        <h1>Add Your Conference!</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="name" type='text' value={this.state.name} onChange={this.handleOnChange} placeholder="Event Name" /><br />
          <textarea name="description" value={this.state.description} onChange={this.handleOnChange} type='text' placeholder="Event Description" /><br />
          <input name="website" type='text' value={this.state.website} onChange={this.handleOnChange} placeholder="Website URL" /><br />
          <input name="date" type="text" value={this.state.date} onChange={this.handleOnChange} placeholder="Enter Date" /><br />
          <input name="cost" type='text' value={this.state.cost} onChange={this.handleOnChange} placeholder="Event Cost" /><br />
          <textarea name="perks" type='text' value={this.state.perks} onChange={this.handleOnChange} placeholder="Presenter Perks" /><br />
          <input name="organizer" type='text' value={this.state.organizer} onChange={this.handleOnChange} placeholder="Organizer" /><br />
          <input name="city" type='text' value={this.state.city} onChange={this.handleOnChange} placeholder="City" /><br />
          <input name="topic" type='text' value={this.state.topic} onChange={this.handleOnChange} placeholder="Topic" /><br />
          <input type='submit' value="Submit Conference" /><br />
        </form>
      </div>
    )
  }
}
