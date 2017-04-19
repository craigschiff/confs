import React from 'react'
import { Link } from 'react-router-dom'


export default class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>"WELCOME TO DEVCONF"</h1><br />
        <Link to='/events'>See all Events</Link>
      </div>
    )
  }
}
