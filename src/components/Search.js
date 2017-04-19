import React from 'react';
import { connect } from 'react-redux'
import addSearch from '../actions/addSearch'
import clearSearch from '../actions/clearSearch'
import { bindActionCreators } from 'redux'




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
    this.props.clearSearch('hi')
    this.props.events.map((event) => {
      if (event.description.split(' ').map(element => element.toLowerCase()).includes(this.state.search.toLowerCase()) || this.state.search.split(' ').map(element => element.toLowerCase()).includes(event.description.toLowerCase())) {
        this.props.addSearch(event)
      }
      return event
    })
  this.setState({search:''})
  //  this.showResults()

  }
  showTopics(){
    return this.props.topics.map((topic) => {
      return  <li>{topic.name}</li>
    })
  }
  // showResults(){
  //
  // }

  render(){
    return(
      <div>
        <label>Search for Conference</label>
        <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder="Search" onChange={this.handleChange} value={this.state.search} />
        <input type="submit" value="GO" />
        </form>

        <ul>
        {this.showTopics()}
        </ul>
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
    clearSearch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
