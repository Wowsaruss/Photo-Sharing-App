require('dotenv').config();
const cors = require('cors')
    , express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , app = express()
    , port  =  4000;

const controller = require('./controllers/controller');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('build'));

massive(process.env.CONNECTION_STRING)
.then( db => {
    app.set('db', db)
});

// API's
app.get('/api/get_users', controller.get_users);


app.listen(port, () => console.log(`app listening on port ${port}`));