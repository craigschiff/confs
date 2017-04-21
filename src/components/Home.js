import React from 'react'
import { Link } from 'react-router-dom'
import NavbarMain from './NavbarMain'

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <NavbarMain />
        <h1>"WELCOME TO DEVCONF"</h1><br />
        <Link to='/events'>See all Events</Link><br /> <br />
        <Link to='/events/new'>Create an Event!</Link>

      </div>
    )
  }
}
