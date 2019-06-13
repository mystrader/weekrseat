const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://mystrader:m0987hhh@cluster0-ukzaa.mongodb.net/test?retryWrites=true&w=majority', {
   useNewUrlParser: true, 
});

app.use(require('./routes'));

app.listen(3333);