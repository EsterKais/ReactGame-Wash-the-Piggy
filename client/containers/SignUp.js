import React, { Component, PropTypes } from 'react'

class SignUp extends Component {

  submitForm(event){
    event.preventDefault()

    const { name } = this.refs

    console.log('name: ', name.value )
  }


  render(){
    return (
      <div className="sign-up">
        <form onSubmit={ this.submitForm.bind(this) }>
          <h1> Sign Up to Wash this Piggy </h1>
          <div className='input'>
            <input type="name" ref="name" />
          </div>

        </form>
      </div>
    )
  }

}

export default SignUp
