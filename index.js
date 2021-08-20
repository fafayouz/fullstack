const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const dotenv = require ('dotenv')
const PostRoutes = require('./routes/api')
const fileUpload  = require('multer')


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use('/api',PostRoutes)
dotenv.config()






//databse config
const PORT = process.env.PORT
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true , useUnifiedTopology : true})
    .then(() => app.listen(PORT , () => console.log(`Server running on port : ${PORT} `)))
    .catch((eroor) => console.log(eroor));

mongoose.set('useFindAndModify',false)
