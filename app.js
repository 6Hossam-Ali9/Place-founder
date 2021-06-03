const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))

const dbURI = 'mongodb+srv://cx109:1234567890@nodetut.u8yh7.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to DB!');
    app.listen(3000, () => {
        console.log('listening')
    });
}).catch(err => console.log(err));

app.use('/api', require('./routes/api'));
app.use((err, req, res, next) => {
    res.status(422).send({error: err.message});
});

app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found!</h1>');
});