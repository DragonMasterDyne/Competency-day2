// COMP 43D reducer 
import axios from "axios";


const initalState = {
    allUsers: []
}


// COMP 43F action builder that gets all users and set them to state
const GET_ALL_USERS = 'GET_ALL_USERS'

export function getAllUsers() {
    // COMP 44C Used axios to call to database 
    // COMP 44D Used .then to grabi info form axios call once it was fulfilled
    const allUser = axios.get('http://localhost:5050/users').then(res => res.data)
    return {
        type: GET_ALL_USERS,
        payload: allUser
    }
}





export default (state = initalState, action) => {
    switch(action.type) {

        // COMP 43E Action that sets action.payload from GET_ALL_USERS to allUsers on state
        case GET_ALL_USERS + '_FULFILLED':
            return Object.assign({}, state, {allUsers: action.payload})

        
        default:
            return state
    }
}