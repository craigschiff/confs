import React from 'react';
import NavbarMain from './NavbarMain'
import TopicList from './TopicList'


export default class  TopicShow extends React.Component {
  componentWillReceiveProps(nextProps){
    if (nextProps === this.props) { return }
    // let id = parseInt(nextProps.match.params.id, 10)
    // let event = this.props.events.filter(event => id == event.id)
    // this.props.setEvent(event[0])
  }
  componentWillMount(){
    if (this.props.showEvent.name) { return }
    debugger
    // let id = parseInt(this.props.match.params.id, 10)
    // let event = this.props.events.filter(event => id == event.id)
    // this.props.setEvent(event[0])
  }

  render(){
    return (
      <div>
        <NavbarMain />
        <TopicList />
      </div>
    )
  }
}
