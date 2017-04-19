import React from 'react'
import { Link } from 'react-router-dom'

export default class NewEvent extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()
    debugger
  }
  render() {
    return(
      <div>
        <h1>Add Your Conference!</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="name" type='text' placeholder="Event Name" /><br />
          <textarea name="description" type='text' placeholder="Event Description" /><br />
          <input name="website" type='text' placeholder="Website URL" /><br />
          <input name="date" type="text" placeholder="Enter Date" /><br />
          <input name="cost" type='text' placeholder="Event Cost" /><br />
          <input name="organizer" type='text' placeholder="Organizer" /><br />
          <input name="city" type='text' placeholder="City" /><br />
          <input name="city" type='text' placeholder="Topic" /><br />
          <input type='submit' value="Submit Conference" /><br />

        </form>
      </div>
    )
  }
}
