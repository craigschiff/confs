import React, { Component } from 'react'
import NavbarMain from './NavbarMain'

export default class About extends Component {
  render(){
    return(
      <div>
        <NavbarMain />
        <h1>Welcome to DevCons</h1>
        <p>DevCons is the place to find important details about all of the upcoming developer conferences.</p>
        <br />
        <p>If you are aware of a conference that is not included please add the event.</p>
        <br />
        <p>If you would like to update details or add more info to a listing you can edit existing events.</p>

      </div>
    )
  }

}
