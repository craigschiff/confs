import React from 'react';
import { connect } from 'react-redux'
import addSearch from '../actions/addSearch'
import clearSearch from '../actions/clearSearch'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { push } from 'react-router-redux'




class Search extends React.Component {
  constructor(){
    super()
    this.state = {
      search: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.showTopics = this.showTopics.bind(this)
    this.showResults = this.showTopics.bind(this)

  }

  handleChange(event){
    this.setState({search: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.clearSearch()
    if (window.location.href.slice(-6) !== 'events') this.props.push('/events')
    let searchResults = []
    this.props.events.forEach((event) => {
      if (event.description){
        if (event.description.split(' ').map(element => element.toLowerCase()).join().includes(this.state.search.toLowerCase())) {
          this.props.addSearch(event)
          searchResults.push(event)
          return event
        }
      }
    })
  if (!searchResults.length > 0){
    alert('There are no results')
  }
  this.setState({search:''})
  //  this.showResults()

  }
  showTopics(){
    return this.props.topics.map((topic) => {
      return  <MenuItem><Link to={`events`} role="menuitem" >{topic.name}</Link></MenuItem>
    })
  }
  // showResults(){
  //
  // }

  render(){
    return(
      <div id="search-bar">
        <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder="Search for Conference" onChange={this.handleChange} value={this.state.search} />
        <input type="submit" value="Go" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    events: state.events,
    topics: state.topics

  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addSearch,
    clearSearch,
    push
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
