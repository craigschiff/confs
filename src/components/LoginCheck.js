import React from 'react'
import { connect } from 'react-redux'
import NewEvent from './NewEvent'



class LoginCheck extends React.Component {
  render() {
    return(
      <div>
      {localStorage.getItem('jwt') ? <NewEvent /> : this.props.history.push('/login')}

      </div>
    )
  }
}

export default connect(mapStateToProps)(LoginCheck)

function mapStateToProps(state){
  return {session: state.session}
}
