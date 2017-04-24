import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import login from '../actions/login'
import { push } from 'react-router-redux'
import NavbarMain from './NavbarMain'

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
    this.login = this.login.bind(this)
  }
  handleChange({target}){
    let key = target.name
    let value = target.value
    this.setState( { [key] : value } )
  }
  redirect(){
    if (this.props.path) {
      this.props.push(this.props.path)
    }else {
      return this.props.history.push('/events/new')
    }
  }
  login(){
    return this.props.login()
  }
  handleSubmit(event){
    event.preventDefault()
    let params = this.state
    axios
    .post('http://localhost:3001/v1/sessions', { account: params })
    .then((response) => {
      localStorage.setItem('jwt', response.data.jwt)
      this.login()
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
    axios
    .post('http://localhost:3001/v1/registrations', { account: params })
    .then((response) => {
      localStorage.setItem('jwt', response.data.jwt)
      console.log(response.data.jwt)
      // this.login()
      return this.redirect()
    })
    .catch((error) => {
      throw(error)
      alert('TRY AGAIN SUCKER')
    })
  }

  render(){
    return(
      <div>
        <NavbarMain />
        <h2>Please log in or sign up below!</h2><br /><br />
        <label>For returning users: </label>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' placeholder="Enter Username" onChange={this.handleChange} />
          <input type='password' name='password' placeholder="Enter Password" onChange={this.handleChange} />
          <input type='submit' value="Log In" />
        </form><br /><br />
        <label>And for new users, please sign in below: </label>
        <form onSubmit={this.handleSignUp}>
          <input type='text' name='username' placeholder="Enter Username" onChange={this.handleChange} />
          <input type='password' name='password' placeholder="Enter Password" onChange={this.handleChange} />
          <input type='submit' value="Sign Up" />
        </form>

      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(LoginPage)

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    push: push,
    login: login
  }, dispatch)
}
