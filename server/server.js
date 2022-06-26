const express = require('express');
const authRoutes = require('./routes/auth');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

//* CONNECT TO DB
mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB connected'))
    .catch(err => console.log('DB CONNECTION ERROR: ', err));


//* APP MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());

if(process.env.NODE_ENV !== 'production') {
    app.use(cors({origins:`http://localhost:3000`} )); //* Allow all origins to access
}


//* ROUTES
app.use(`/api`, authRoutes)


//* SERVER
const port = process.env.PORT || 8000;
app.listen(port, ()=> {
    console.log(`API is Up and running on port ${port}`);
})