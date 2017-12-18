import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAllUsers} from '../ducks/reducer'

class User_page extends Component {
  constructor() {
    super();


  }

  


  render() {
    return (
      <div>
        <p>User Page</p>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {getAllUsers})(User_page)