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

  render() {
    let event = this.props.event

    return(
      <div>
        <Col xs={6} md={4} log={6}>
          <div id="mainEventDiv">
            <h4><Link to={`/events/${event.id}`} > {event.name} </Link></h4>
            <strong>Date:</strong>{event.date ? event.date.split('T').shift().split('-').reverse().join('/') : null}<br />
            {event.image ? <img id="eventImg" src={event.image} /> : null}
            <br />
            {event.cost}<br />
            <Truncate lines={6} ellipsis={<Link to={`/events/${event.id}`}>...<br/>  Read more...</Link>}>
               {event.description}
            </Truncate>
            <br />
            {event.topic ? <Link to={`/topics/${event.topic.id}`}>{event.topic.name}</Link> : null}
            <br />
          </div>
        </Col>
      </div>
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
