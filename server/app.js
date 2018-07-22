const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cors())

app.listen(process.env.PORT || 8081, ()=>{
  console.log("Server listening to port 8081");
});

//temp data
var tempUsername, tempPassword;

app.get('/', (req, res)=>{
  res.send('Hey there!');
});

app.post('/register', urlencodedParser, (req, res)=>{
  tempUsername = req.body.username;
  tempPassword = req.body.password;
  res.send(`Thanks ${req.body.username}`);
});

app.post('/login', urlencodedParser, (req, res)=>{
  if(req.body.username === tempUsername  && req.body.password === tempPassword){
    res.send('Login successfully!');
    console.log("Done B)");
  }else{
    res.send('Login Failed!');
    console.log("Not yet)");
  }
});
