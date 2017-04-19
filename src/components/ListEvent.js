import React from 'react';

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
    return(
      <div>
        {this.props.event.name}<br />
        {this.props.event.description}<br />
        {this.props.event.date}<br />
        {this.props.event.cost}<br />
        <br />


      </div>
    )
  }
}
export default ListEvent
