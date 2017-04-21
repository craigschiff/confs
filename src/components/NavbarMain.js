import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar';
import Search from './Search'
import LoginPage from './LoginPage'
import Button from 'react-bootstrap/lib/Button';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';


class NavbarMain extends React.Component {
  // links need to be added once route is made for topics and cities

  showTopics(){
  const topicsArray =   ["Android", "Artificial Intelligence", "C", "C++", "C#", "Go", "Java", "JavaScript", "Microsoft", "Objective-C", "Perl", "Python", "PHP", "R", "Ruby", "Scratch", "Swift"]
    return topicsArray.map((topic) => {
    return <MenuItem><Link to={`events`} role="menuitem" >{topic}</Link></MenuItem>
    })
  }

  showEvents(){
    return this.props.events.map((event) => {
    return <MenuItem><Link to={`events`} role="menuitem" >{event.organizer.name}</Link></MenuItem>
    })
  }

  showCities(){
  const citiesArray = ["New York", "San Francisco", "Chicago", "Los Angeles", "Boston", "Tel Aviv", "Seattle", "Berlin", "Singapore", "Paris", "Sao Paulo", "Moscow", "Austin", "Bangalore", "Sydney", "Toronto", "Vancouver", "Amsterdam", "Montreal"]
    return citiesArray.map((city) => {
    return <MenuItem><Link to={`events`} role="menuitem" >{city}</Link></MenuItem>
    })
  }

  render() {
    return(
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/events">DevCons</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          <Search />
          </Navbar.Header>
          <Navbar.Collapse>
            <NavDropdown eventKey={1} title="Or Select By Topic" id="basic-nav-dropdown-1">
              <MenuItem>{this.showTopics()}</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Or By Organizer" id="basic-nav-dropdown-2">
              <MenuItem>{this.showEvents()}</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Or By City" id="basic-nav-dropdown-3">
              <MenuItem>{this.showCities()}</MenuItem>
            </NavDropdown>
          </Navbar.Collapse>
          <Link to='/login'>Login/Sign Up</Link>
        </Navbar>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    topics: state.topics
  }
}
export default connect(mapStateToProps)(NavbarMain)
