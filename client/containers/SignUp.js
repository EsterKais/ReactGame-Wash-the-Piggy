import React, { Component, PropTypes } from 'react'
import UserForm from '../components/UserForm'

class SignUp extends Component {

  render () {
    return <UserForm signUp={true} />
  }

}

export default SignUp
