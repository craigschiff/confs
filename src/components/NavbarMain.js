import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar';
import Search from './Search'
import Button from 'react-bootstrap/lib/Button';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';


class NavbarMain extends React.Component {

  showTopics(){
    return this.props.topics.map((topic) => {
      return  <MenuItem><Link to={`events`} role="menuitem" >{topic.name}</Link></MenuItem>
    })
  }

  render() {

    return(
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/events">DevConf</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          <Search />
          </Navbar.Header>
          <Navbar.Collapse>
            <NavDropdown eventKey={1} title="Or Select By Topic" id="basic-nav-dropdown-1">
              <MenuItem eventkey={1.1}>
              
              {this.showTopics()}

              </MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={2} title="Or By Organizer" id="basic-nav-dropdown-2">
              <MenuItem>{this.showTopics()}</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Or By City" id="basic-nav-dropdown-3">
              <MenuItem>{this.showTopics()}</MenuItem>
            </NavDropdown>
          </Navbar.Collapse>
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
