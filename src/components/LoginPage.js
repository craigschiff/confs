import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import login from '../actions/login'

class LoginPage extends React.Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.redirect = this.redirect.bind(this)
  }
  handleChange({target}){
    let key = target.name
    let value = target.value
    this.setState( { [key] : value } )
  }
  redirect(){
    return this.props.history.push('/events/new')
  }
  handleSubmit(event){
    event.preventDefault()
    let params = this.state
    let login = this.props.login.bind(this)
    axios
    .post('http://localhost:3001/v1/sessions', { account: params })
    .then((response) => {
      sessionStorage.setItem('jwt', response.data.jwt)
      login
      return this.redirect()
    })
    .catch((error) => {
      throw(error)
      alert('USERNAME / PASSWORD NOT VALID')

    })
  }
  handleSignUp(event){
    event.preventDefault()
    let params = this.state
    let login = this.props.login.bind(this)
    axios
    .post('http://localhost:3001/v1/registrations', { account: params })
    .then((response) => {
      sessionStorage.setItem('jwt', response.data.jwt)
      console.log(response.data.jwt)
      login
      this.redirect()
    })
    .catch((error) => {
      throw(error)
      alert('TRY AGAIN SUCKER')
    })
  }

  render(){
    return(
      <div>
        <h2>PLEASE LOG IN OR SIGN UP BELOW!</h2><br /><br />
        <label>For returning users: </label>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' placeholder="Enter Username" onChange={this.handleChange} />
          <input type='password' name='password' placeholder="Enter Password" onChange={this.handleChange} />
          <input type='submit' value="LOG IN" />
        </form><br /><br />
        <label>And for new users, please sign in below: </label>
        <form onSubmit={this.handleSignUp}>
          <input type='text' name='username' placeholder="Enter Username" onChange={this.handleChange} />
          <input type='password' name='password' placeholder="Enter Password" onChange={this.handleChange} />
          <input type='submit' value="SIGN UP" />
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
