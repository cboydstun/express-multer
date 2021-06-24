//import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require("morgan");

//import routes
const api = require('./routes/upload')

//initialize express
const app = express();

//initalize middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(morgan(':method :url :response-time'))

//initialize server port
const PORT = 5001;

// MongoDB Configuration
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/react-fileupload-db', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
.then(() => console.log('Database sucessfully connected'))
.catch(err => console.log('Database could not be connected: ' + err))

//public image directory for uploads
app.use('/public', express.static('public'));

//declare routes
app.use('/api', api)

//server port is listening
app.listen(PORT, () => {console.log('Connected to port ' + PORT)})