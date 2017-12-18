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
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
})


app.get('/users', (req, res) => {
    const db = app.get('db')
    db.get_users().then((users) => {
        res.status(200).send(users)
    })
})

const PORT = 5050

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))