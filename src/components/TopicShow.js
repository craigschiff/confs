import React from 'react';
import NavbarMain from './NavbarMain'
import { connect } from 'react-redux'
import ListEvent from './ListEvent'



class TopicShow extends React.Component {
  constructor(){
    super()
    this.state = {
      topic: {},
      events: []
    }
    this.setTopicAndEvent = this.setTopicAndEvent.bind(this)
  }


  componentWillReceiveProps(nextProps){
    if (nextProps === this.props) { return }

    let id = parseInt(nextProps.match.params.id, 10)
    this.setTopicAndEvent(id)

  }
  componentWillMount(){
    if (this.props.showTopic) { return }

    let id = parseInt(this.props.match.params.id, 10)
    this.setTopicAndEvent(id)
  }
  setTopicAndEvent(id){
    let topic = this.props.topics.filter(topic => id == topic.id)[0]
    this.setState({ topic })
    let events = this.props.events.filter(event => event.topic.id == topic.id)
    this.setState({ events })

  }

  render(){

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
