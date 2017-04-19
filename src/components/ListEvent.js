import React from 'react';
import { Link } from 'react-router-dom'


class ListEvent extends React.Component {
  // constructor(){
  //   super()
  //   this.listItem = this.listItem.bind(this)
  // }
  //
  // listItem() {
  //   debugger
  // }
  render() {
    let event = this.props.event
    return(
      <div>
        <Link to={`/events/${event.id}`} > {event.name} </Link><br />
        {event.description}<br />
        {event.date}<br />
        {event.cost}<br />
        <br />


      </div>
    )
  }
}
export default ListEvent
