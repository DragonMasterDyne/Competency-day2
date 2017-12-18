    require('dotenv').config()
const bodyParser = require('body-parser')
    , express = require('express')
    , cors = require('cors')
    , massive = require('massive')
    , axios = require('axios');

// COMP 74C invoked express
const app = express();

app.use(cors());
app.use(bodyParser.json());

// COMP 70C put my connection string on .env passed in to massive to connect to database
massive(process.env.CONNECTION_STRING).then( db =>{
    app.set('db', db)
})


// COMP 76C This is an example of a RESTful url
// COMP 74D-1 used get to get info from database
app.get('/users', (req, res) => {
    const db = app.get('db')
    // COMP 70K used massive query function to get all users from database
    db.get_users().then((users) => {
        res.status(200).send(users)
    })
})

app.get('/user?first_name=name', (req, res) => {
    const db = app.get('db')
    db.get_users_by_name([`%${req.query.first_name}%`]).then((user) => {
        res.status(200).send(user)
    })
})

// COMP 76F Used body-parser to parse info on body and pass it into massive query
// COMP 76C This is an example of a RESTful url
// COMP 74D-2 used put to update info in database
app.put('/update/user', (req, res) => {
    const db = app.get('db')
    const {first_name, last_name, id} = req.body
    db.update_user([first_name, last_name, id]).then(user => {
        res.status(200).send(user)
    })
})

// COMP 76D Used params to pass first_name and last_name
// COMP 76C This is an example of a RESTful url
// COMP 74D-3 used post to add new info to database
app.post('/add/user/:first_name/:last_name', (req, res) => {
    const db = app.get('db')
    const {first_name, last_name} = req.params
    db.add_user([first_name, last_name]).then(user => {
        res.status(200).send(user)
    })
})

// COMP 76C This is an example of a RESTful url
// COMP 74D-4 used delete to remove info from database
app.delete('/remove/user/:id', (req, res) => {
    const db = app.get('db');
    const {id} = req.params
    db.remove_user([id]).then(response => {
        res.status(200).send(response)
    })
})


const PORT = 5050

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))