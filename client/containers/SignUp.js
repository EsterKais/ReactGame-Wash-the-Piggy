import React, { Component, PropTypes } from 'react'

class SignUp extends Component {

  submitForm(event){
    event.preventDefault()

    const { name, email } = this.refs

    console.log('name: ', name.value )
    console.log('email: ', email.value )

  }


  render(){
    return (
      <div className="sign-up">
        <form onSubmit={ this.submitForm.bind(this) }>
          <h1> Sign Up to Wash this Piggy </h1>
          <div className='input'>
            <input type="name" ref="name" placeholder="What's your name?" />
          </div><br />

          <div className='input'>
            <input type="email" ref="email" placeholder="What's your email?" />
          </div><br />
          <div className='input'>
            <input type='password' ref="password" placeholder="Set a password" />
          </div><br />
          <div className='input'>
            <input type='password' ref="passwordConfirmation" placeholder="Confirm your password" />
          </div><br />
          <div className='controls'>
            <button type='submit'>Sign Up</button>
            <button label="link">Already Signed Up?</button>
          </div>
        </form>
      </div>
    )
  }

}

export default SignUp
