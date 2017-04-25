import React, { Component } from 'react'
import NavbarMain from './NavbarMain'
import { Link } from 'react-router-dom'


export default class About extends Component {
  render(){
    return(
      <div id="bioText">
        <NavbarMain />
        <h1>Welcome to DevCons</h1>
        <p>DevCons is the place to find important details about all of the upcoming developer conferences.</p>
        <p>If you are aware of a conference that is not included please add the event.</p>
        <p>If you would like to update details or add more info to a listing you can edit existing events.</p>
        <a href="https://github.com/craigschiff/confs"> Check out our source code on GitHub!</a>
      </div>
    )
  }

}
