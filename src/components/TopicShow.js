import React from 'react';
import NavbarMain from './NavbarMain'
import TopicList from './TopicList'
// import setTopic from '../actions/setTopic'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import ListEvent from './ListEvent'



class TopicShow extends React.Component {
  constructor(){
    super()
    this.state = {
      topic: {},
      events: []
    }
    // this.showEvents = this.showEvents.bind(this)
  }

  // getTopicsEvents(){
  //
  // }

  componentWillReceiveProps(nextProps){
    if (nextProps === this.props) { return }

    let id = parseInt(nextProps.match.params.id, 10)
    let topic = this.props.topics.filter(topic => id == topic.id)[0]
    this.setState({ topic })

    let topicEventIds = topic.events
    let events = this.props.events.filter(event => topicEventIds.includes(event.id) )
    this.setState({ events })
    // this.props.setTopic(topic[0])

  }
  componentWillMount(){
    if (this.props.showTopic) { return }

    let id = parseInt(this.props.match.params.id, 10)
    let topic = this.props.topics.filter(topic => id == topic.id)[0]
    this.setState({ topic: topic })
    let topicEventIds = topic.events
    let events = this.props.events.filter(event => topicEventIds.includes(event.id) )
    this.setState({ events })
  }
  showEvents(){
    return this.state.events.forEach((event) => {
      debugger
      return <ListEvent key={event.id} event={event}/>
    })

  }

  render(){
    // {this.state.events[0]
    // ? this.state.events.forEach(event => <ListEvent event={event} />)
    // : null}
    
    return (
      <div>
        <NavbarMain />
        <h3>{this.state.topic ? this.state.topic.name : null}</h3>
        <div key={5}>
          {this.state.events.map((event) => {
            return <ListEvent key={event.id} event={event} />
          })}

        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps)(TopicShow)
function mapStateToProps(state) {
    return {
      topic: state.topicShow,
      events: state.events,
      topics: state.topics
    }
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//       setTopic
//     }, dispatch)
// }
