if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

const express = require('express');
const routes =  require('./routes/users');
const cors = require('cors');
const db = require('./config/database');

db.authenticate()
  .then(() => console.log('Database Connected!!'))
  .catch(err => console.log('Error: ' + err))

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send("Server Running!!");
})

app.use("/user", routes);

app.listen(process.env.Port || 5000, ()=> {
    console.log("Server Running On Port 5000!!");
})