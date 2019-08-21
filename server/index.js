const express = require('express')
const app = express();
const fs = require('fs');
const FortController = require('./controllers/FortuneController');

app.get('/', 
  FortController.getFortune, 
  (req, res)=>{
    return res.send("Your fortune: " + res.locals.fortune);
  }
)

app.use('*', (err, req, res, next)=>{
  console.log('error!');
})

app.listen(3000, ()=>{
  console.log('listening on 3k');
})
