import React from 'react';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/lib/Col'



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
      <Col xs={6} md={4}>
        <Link to={`/events/${event.id}`} > {event.name} </Link><br />
        {event.description}<br />
        {event.date}<br />
        {event.cost}<br />
        </Col>
    )
  }
}
export default ListEvent
