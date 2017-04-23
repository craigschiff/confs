import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar';
import Search from './Search'
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


class NavbarMain extends React.Component {
  // links need to be added once route is made for topics and cities

  showTopics(){
  const topicsArray =   ["Android", "Artificial Intelligence", "C", "C++", "C#", "Go", "Java", "JavaScript", "Microsoft", "Objective-C", "Perl", "Python", "PHP", "R", "Ruby", "Scratch", "Swift"]
    return topicsArray.map((topic, index) => {
    return <MenuItem key={index}><Link to={`events`} role="menuitem" >{topic}</Link></MenuItem>
    })
  }

  showEvents(){
    return this.props.events.map((event, index) => {
    return <MenuItem key={index}><Link to={`events`} role="menuitem" >{event.organizer.name}</Link></MenuItem>
    })
  }

  showCities(){
  const citiesArray = ["New York", "San Francisco", "Chicago", "Los Angeles", "Boston", "Tel Aviv", "Seattle", "Berlin", "Singapore", "Paris", "Sao Paulo", "Moscow", "Austin", "Bangalore", "Sydney", "Toronto", "Vancouver", "Amsterdam", "Montreal"]
    return citiesArray.map((city, index) => {
    return <MenuItem key={index}><Link to={`events`} role="menuitem" >{city}</Link></MenuItem>
    })
  }

  render() {
    return(
        <Navbar inverse collapseOnSelect id="Navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a className="logotext" href="/events">DevCons</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Search />
          <Navbar.Collapse>
            <Nav pullRight>
                <NavDropdown eventKey={1} title="Or Select By Topic" id="basic-nav-dropdown-1">
                  {this.showTopics()}
                </NavDropdown>
                <NavDropdown eventKey={2} title="Or By Organizer" id="basic-nav-dropdown-2">
                  <MenuItem>{this.showEvents()}</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={3} title="Or By City" id="basic-nav-dropdown-3">
                  <MenuItem>{this.showCities()}</MenuItem>
                  <NavItem eventKey={4}> <Link to="/login" class="login">Login/Sign Up</Link> </NavItem>
                </NavDropdown>
              </Nav>
          </Navbar.Collapse>
        </Navbar>
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
