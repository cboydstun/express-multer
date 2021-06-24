//import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//initialize express
const app = express();

//initalize middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//initialize server port
const PORT = 4000;

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
const api = require('./routes/upload')
app.use('/api', api)

//server port is listening
app.listen(PORT, () => {console.log('Connected to port ' + PORT)})


//error handling
app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});