import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import login from '../actions/login'

class CreateAccount extends React.Component {
  constructor(){
    super()
    this.state = { account:
      {username: '',
      password: ''}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange({target}){
    let key = target.name
    let value = target.value
    this.setState( {account: {[key]: value } })
  }
  handleSubmit(event){
    event.preventDefault()
    debugger
    let params = this.state
    axios
    .post('localhost3001/v1/registrations', { params })
    .then((response) => {
      sessionStorage.setItem('jwt', response.jwt)
      alert(response.jwt)
      this.props.login()
    })
    .catch((error) => {
      throw(error)
    })
  }
  render(){
    return(
      <div>
        <h2>PLEASE SIGN UP!</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' placeholder="Enter Username" onChange={this.handleChange} />
          <input type='password' name='username' placeholder="Enter Password" onChange={this.handleChange} />
          <input type='submit' value="LOG IN" />
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(LoginPage)

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    login: login
  })
}
