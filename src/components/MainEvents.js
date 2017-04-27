import React from 'react';
import { connect } from 'react-redux'
import ListEvent from './ListEvent'


class MainEvents extends React.Component {
  render(){
    return (
      <div>
        {this.props.events.map((event, index) => {
          return <ListEvent key={index} event={event} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.search.length > 0){
    return {events: state.search}
  } else {
    return {events: state.events}
  }
}

export default connect(mapStateToProps)(MainEvents)
