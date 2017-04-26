import React from 'react';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/lib/Col'
import TextTruncate from 'react-text-truncate';


class ListEvent extends React.Component {
  render() {
    let event = this.props.event

    return(
      <div>
        <Col xs={6} md={4} log={6}>
          <div id="mainEventDiv">
            <h4><Link to={`/events/${event.id}`} > {event.name} </Link></h4>
            <strong>Date:</strong>{event.date ? event.date.split('T').shift().split('-').reverse().join('/') : null}<br />
            <img id="eventImg" src={event.image} />
            <br />
            {event.cost}<br />
          {event.description.slice(0, 300)}...<Link to={`/events/${event.id}`}><br />See More...</Link>
            <br />
            {event.topic ? <Link to={`/topics/${event.topic.id}`} >{event.topic.name}</Link> : null}
          </div>
        </Col>
      </div>
    )
  }
}
// <TextTruncate
//   line={5}
//   truncateText="…"
//   text={event.description}
//   textTruncateChild={<a href="#">Read on</a>}
// />

export default ListEvent

// <Truncate lines={6} ellipsis={<Link to={`/events/${event.id}`}>...<br/>  Read more...</Link>}>
//    {event.description}
// </Truncate>
