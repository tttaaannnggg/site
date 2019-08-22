const express = require('express')
const app = express();
const fs = require('fs');
const FortController = require('./controllers/FortuneController');
const path = require('path');
const api = require('./routes/api');

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, '../index.html'));
})

app.get('/api/fortune', 
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
});
