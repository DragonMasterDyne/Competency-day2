import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/user_page'>
          <p>Users Page</p>
        </Link>
      </div>
    )
  }
}
