import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import setEvent from '../actions/setEvent'
import EventShowList from './EventShowList'
import NavbarMain from './NavbarMain'



class EventShow extends React.Component {
  componentWillReceiveProps(nextProps){
    if (nextProps == this.props) { return }
    let id = parseInt(nextProps.match.params.id, 10)
    let event = this.props.events.filter(event => id == event.id)
    this.props.setEvent(event[0])
  }
  componentWillMount(){
    if (this.props.showEvent.name) { return }
    let id = parseInt(this.props.match.params.id, 10)
    let event = this.props.events.filter(event => id == event.id)
    this.props.setEvent(event[0])
  }
  render(){

    let event = this.props.showEvent

    return (
      <div>
        <NavbarMain />
        <EventShowList />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShow)

function mapStateToProps (state) {
  return {
    events: state.events,
    showEvent: state.eventShow
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setEvent
  }, dispatch)
}
