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

// COMP 74D-1 used get to get info from database
app.get('/users', (req, res) => {
    const db = app.get('db')
    // COMP 70K used massive query function to get all users from database
    db.get_users().then((users) => {
        res.status(200).send(users)
    })
})

// COMP 74D-2 used post to add new info to database
app.post('/add/user/:first_name/:last_name', (req, res) => {
    const db = app.get('db')
    const {first_name, last_name} = req.params
    db.add_user([first_name, last_name]).then(user => {
        res.status(200).send(user)
    })
})

const PORT = 5050

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))