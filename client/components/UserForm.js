import React, { Component } from 'react'
import { history } from '../store'

import FlatButton from 'material-ui/Flatbutton'



class UserForm extends Component {

  submitForm(event) {
    event.preventDefault()

    const { name, email, password, passwordConfirmation } = this.refs

    console.log('name: ', name.value )
    console.log('email: ', email.value )
    console.log('password: ', password.value )
    console.log('passwordConfirmation: ', passwordConfirmation.value )


  }

  render(){
    const { signUp } = this.props

    return (
      <div className="user-form">
        <form onSubmit={ this.submitForm.bind(this) }>
          <h1>{ signUp ? 'Sign up' : 'Sign in' } to Wash this Piggy </h1>

          { signUp ?
            <div className='input'>
              <input type="name" ref="name" placeholder="What's your name?" />
            </div> : null }  <br />

          <div className='input'>
            <input type="email" ref="email" placeholder="What's your email?" />
          </div><br />

          <div className='input'>
            <input type='password' ref="password" placeholder="Set a password" />
          </div><br />

          { signUp ?
            <div className='input'>
              <input type='password' ref="passwordConfirmation" placeholder="Confirm your password" />
            </div> : null } <br />

          <div className='controls'>
            <button type='submit'>{ signUp ? 'Sign Up' : 'Sign In' }</button>
            <FlatButton label={ signUp ? 'Sign In' : 'Sign Up' } onClick={ this.linkTo.bind(this) } />
          </div>
        </form>
      </div>
    )
  }

  linkTo() {
    const { signUp } = this.props
    const location = signUp? '/sign-in' : '/sign-up'
    history.push(location)
  }
}



export default UserForm
