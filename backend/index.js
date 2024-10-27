const express = require('express');
const app = express();
const dotenv = require('dotenv');
const DBconnection = require('./config/db');
const cors = require('cors');

app.use(cors());


dotenv.config();
DBconnection();

const loginRoute = require('./routes/LoginRoute.route');
const jobRoute = require('./routes/JobRoute.route');
const HrRoute = require('./routes/HrRoute.route');
const signupRoute = require('./routes/signUpRoute.route');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/login',loginRoute);
app.use("/signup",signupRoute)
app.use('/job',jobRoute);
app.use('/hr',HrRoute);


const PORT = process.env.PORT || 3128;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});