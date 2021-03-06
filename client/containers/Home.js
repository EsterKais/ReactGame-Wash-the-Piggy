import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import PigParlor from './PigParlor'

class Home extends Component {
  render() {
    const { userName } = this.props

    return(
      <div className="home">
        <h1>Welcome, { userName || 'Stranger' }!</h1>
        <PigParlor />
      </div>
    )
  }
}

Home.propTypes = {
  userName: PropTypes.string,
}

const mapStateToProps = (state) => {
  return {
    userName: state.currentUser.name,
  }
}

export default connect(mapStateToProps)(Home)
