import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar';
import Search from './Search'
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import logout from '../actions/logout';
import { bindActionCreators } from 'redux'


class NavbarMain extends React.Component {
  // links need to be added once route is made for topics and cities
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(){

  }

  showTopics(){
    // debugger
    // let topics = []
    // let topic
    // this.props.events.forEach((event) => {
    //   topic = event.topic
    //
    //   if (!topics.includes(topic)){
    //     topics.push(topic)
    //   }
    // })
  return this.props.topics.map((topic) => {
    return <MenuItem key={topic.id}><Link to={`/topics/${topic.id}`} role="menuitem" >{topic.name}</Link></MenuItem>
    })
  }
  handleClick(){
    localStorage.clear()
    this.props.logout()
    return
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
              <NavItem eventKey={.5} href='/'><Link to="/about">About</Link></NavItem>
              <NavItem eventKey={.5} href='/events/new'><Link to="/events/new">New Event </Link></NavItem>
                <NavDropdown eventKey={1} title="Or Select By Topic" id="basic-nav-dropdown-1">
                  {this.showTopics()}
                </NavDropdown>
                {localStorage.getItem('jwt') ?
                <NavItem eventKey={4} href='/'> <button onClick={this.handleClick}>Logout</button> </NavItem> :
                <NavItem eventKey={4} href='/'> <Link to="/login">Login/Sign Up </Link> </NavItem>
              }

              </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events,
    topics: state.topics,
    login: state.session
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMain)

// <NavDropdown eventKey={2} title="Or By Organizer" id="basic-nav-dropdown-2">
//   <MenuItem>{this.showEvents()}</MenuItem>
// </NavDropdown>
// <NavDropdown eventKey={3} title="Or By City" id="basic-nav-dropdown-3">
//   <MenuItem>{this.showCities()}</MenuItem>
// </NavDropdown>
//
