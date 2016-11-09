import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

class PigParlor extends Component {

  render() {

    return (
      <div className="pig-parlor">
        <RaisedButton label="Create Game" primary={ true } />
      </div>
    )
  }
}


export default PigParlor
