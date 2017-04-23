import React from 'react';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/lib/Col'
import Truncate from 'react-truncate';


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
        <strong>Date:</strong>{event.date ? event.date.split('T').shift().split('-').reverse().join('/') : null}<br />
        {event.cost}<br />
        <Truncate lines={6} ellipsis={<Link to={`/events/${event.id}`}>...<br/>  Read more...</Link>}>
           {event.description}
        </Truncate>
        <br />
        {event.image}
        </Col>
    )
  }
}


  // function formatDate(date) {
  //   var year = date.getFullYear(),
  //     month = date.getMonth() + 1, // months are zero indexed
  //     day = date.getDate(),
  //     hour = date.getHours(),
  //     minute = date.getMinutes(),
  //     second = date.getSeconds(),
  //     hourFormatted = hour % 12 || 12, // hour returned in 24 hour format
  //     minuteFormatted = minute < 10 ? "0" + minute : minute,
  //     morning = hour < 12 ? "am" : "pm";
  //
  // return month + "/" + day + "/" + year + " " + hourFormatted + ":" +
  //         minuteFormatted + morning;
  // }

export default ListEvent
