import React, { Component } from 'react'
import Nav from './Nav'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getAllUsers} from '../ducks/reducer'
import {Link} from 'react-router-dom'
import '../App.css'

class Dashboard extends Component {


// COMP 44E Used componentDidMount to get all the users from database
componentDidMount() {
    this.props.getAllUsers()
  }


  render() {
    console.log(this.props.allUsers)
    // COMP 43G Using redux state 
    const users = this.props.allUsers.map((e,i) => {
        return (<div key={i}>
        {/* COMP 42E Used Link to route users to the user page of specific id */}
        <Link to={`/user_page/${e.id}`}>
            <div>{e.first_name}</div>
            <div>{e.last_name}</div>
        </Link>
        </div>)
    })
    return (
      <div>
        <p className='text'>Dashboard</p>
        <Nav/>
            {users}

            <div className='grid_box'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>
            </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getAllUsers}, dispatch)
  }

// COMP 43H Used mapStateToProps to add reducer state to props of component
function mapStateToProps(state) {
    return state
  }


  // COMP 43C Used connect to connect the Dashboard component to redux
  export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)