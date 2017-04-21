import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NewEvent from './NewEvent'



class LoginCheck extends React.Component {
  render() {
    return(
      <div>
      {sessionStorage.getItem('jwt') ? <NewEvent /> : this.props.history.push('/login')}

      </div>
    )
  }
}

export default connect(mapStateToProps)(LoginCheck)

function mapStateToProps(state){
  return {session: state.session}
}
